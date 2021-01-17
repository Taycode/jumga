"""Services for Order"""

from django.db.models import F
from payment.flutterwave import Flutterwave


class OrderServices(object):
    """Order Service module"""

    @staticmethod
    def transfer_to_user(user, amount):
        """Transfer to a Jumga User"""

        data = {
            'account_bank': user.account_bank,
            'account_number': user.account_number,
            'amount': amount,
            'narration': 'Jumga Transfer',
            'beneficiary_name': user.get_full_name()
        }

        flutterwave = Flutterwave()
        response = flutterwave.create_a_transfer(data)

        if response.status_code == 200:
            response = response.json()
            transfer_id = response.get('data').get('id')

            get_transfer_response = flutterwave.get_a_transfer(transfer_id)

            if get_transfer_response.status_code == 200:

                get_transfer_response = get_transfer_response.json()

                if get_transfer_response.get('data').get('status') == 'SUCCESSFUL':
                    user.balance -= amount
                    user.save()

    def process_transaction_for_each_product_order(self, product_order):
        """Allocate commissions and transfer"""

        cost = product_order.product.price * product_order.quantity

        # Seller gets 97.5 percent of the total cost of the product

        seller_commission = 0.975 * cost

        jumga_sale_commission = cost - seller_commission

        # Delivery Fee is 7.5 percent of the price of the product

        delivery_fee = 0.075 * cost

        # Jumga gets 20 percent of delivery fee as commission

        jumga_delivery_commission = delivery_fee * 0.2

        # rider gets the other 80 percent

        rider_commission = delivery_fee - jumga_delivery_commission

        rider = product_order.product.store.rider

        rider.balance += rider_commission
        rider.save()

        self.transfer_to_user(rider, rider_commission)

        # Transfer to seller

        seller = product_order.product.store.owner

        seller.balance += seller_commission
        seller.save()

        self.transfer_to_user(seller, seller_commission)

        total_jumga_commissions = jumga_sale_commission + jumga_delivery_commission

        return None
