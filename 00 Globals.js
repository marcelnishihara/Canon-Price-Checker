ID_SPREADSHEET = '1PsouoN4IoVzDARHRCDiyyuK4uYZrYumV-ch2fDPMGiU';
SHEET_NAME = 'eosRepackaged';
URL_REPACKAGED = 'https://www.loja.canon.com.br/pt/canonbr/search/eos-reembaladas';
URL_PRODUCT_PATH = 'https://www.loja.canon.com.br';

REGEX_URL_AND_NAME_OF_PRODUCT = /<div class="product_name">\n.*\n.*\n.*\n.*href="(.*)">(.*)<\/a>/g;
REGEX_PRICE = /value="(.*)" name="noninstall"\/>/g;

LIST_OF_NAMES = new Array();
LIST_OF_URLS = new Array();
LIST_OF_PRICES = new Array();
LIST_OF_PRODUCTS = new Array();