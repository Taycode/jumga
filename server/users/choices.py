"""Choices for User app"""

role_choices = (
		('rider', 'rider'),
		('seller', 'seller'),
		('admin', 'admin'),
		('superuser', 'superuser')
)

DEFAULT_USER_ROLE = 'seller'


country_choices = (
	('nigeria', 'nigeria'),
	('ghana', 'ghana'),
	('kenya', 'kenya'),
	('uk', 'uk')
)

DEFAULT_COUNTRY_CHOICE = 'nigeria'
