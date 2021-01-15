"""Services for Order"""


class OrderServices(object):
    """Order Service module"""

    def process_transaction_for_each_product_order(self, product_order):

        cost = product_order.price

        # Seller gets 97.5 percent of the total cost of the product

        seller_commission = 0.975 * cost

        jumga_sale_commission = cost - seller_commission

        # Delivery Fee is 7.5 percent of the price of the product

        delivery_fee = 0.075 * cost

        # Jumga gets 20 percent of delivery fee as commission

        jumga_delivery_commission = delivery_fee * 0.2

        # rider gets the other 80 percent

        rider_commission = delivery_fee - jumga_delivery_commission


