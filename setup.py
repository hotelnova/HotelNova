from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in hotelnova/__init__.py
from hotelnova import __version__ as version

setup(
	name="hotelnova",
	version=version,
	description="Hotel Management App",
	author="Hotel Nova",
	author_email="customer.support@hotelnova.pk",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
