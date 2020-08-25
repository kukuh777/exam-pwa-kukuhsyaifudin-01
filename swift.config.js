/* --------------------------------------- */
/* STORE CONFIGURATION
/* --------------------------------------- */

const HOST = {
    local: 'http://localhost:3000',
    dev: 'https://swiftpwa.testingnow.me',
    stage: 'https://pwa.getswift.asia.dmmy.me',
    prod: 'https://pwa.getswift.asia',
};

/* Magento GraphQL Endpoint */
const graphqlEndpoint = {
    local: 'https://swiftpwa-be.testingnow.me/graphql',
    dev: 'https://swiftpwa-be.testingnow.me/graphql',
    stage: 'https://swiftpwa-be.testingnow.me/graphql',
    prod: 'https://b2cdemo.getswift.asia/graphql',
};

/* --------------------------------------- */
/* FEATURES CONFIGURATION
/* --------------------------------------- */

/* Social Sharing */
const shareIcon = {
    facebook: true,
    twitter: true,
    line: true,
    email: true,
    telegram: true,
    pinterest: false,
    linkedin: false,
};

/* Password Validator */
const passwordStrength = {
    minValue: 8,
    maxValue: 20,
    numberOfRequiredClass: 3, // Lowercase + Uppercse + Dgits + spesial caracter = 4
};

/* Translation */
const languagesLabel = {
    id: 'Bahasa Indonesia',
    en: 'English',
};

/* Google Tag Manager
 * before enable this configuration, firstly you need to import the gtm tags json.
 * gtm tags json need to be exported from Magento admin in Welpixel GTM configuration.
 * adjust the tag name if you want before import into GTM dashboard setting.
 * as reference you can find sample gtm tags in folder "sample/gtm" folder
 * NOTE: this GTM functionality includes connecting to GA via GTM tag.
 */
const GTM = {
    enable: false,
    gtmId: {
        local: '', // sample: GTM-N76V8KQ
        dev: '', // sample: GTM-N76V8KQ
        stage: '', // sample: GTM-N76V8KQ
        prod: '', // sample: GTM-N76V8KQ
    },
};

/* Recapthca Configuration */
const recaptcha = {
    enable: false,
    siteKey: {
        local: '', // sample: 6LcZmLEZAAAAADkdlp8S8tExis2EVhNiuMv6ayo7
        dev: '', // sample: 6LcZmLEZAAAAADkdlp8S8tExis2EVhNiuMv6ayo7
        stage: '', // sample: 6LcZmLEZAAAAADkdlp8S8tExis2EVhNiuMv6ayo7
        prod: '', // sample: 6LcZmLEZAAAAADkdlp8S8tExis2EVhNiuMv6ayo7
    },
    serverKey: {
        local: '', // sample: 6LcZmLEZAAAAANHhkqwoRna2vqIVWHNKwOvxm26n
        dev: '', // sample: 6LcZmLEZAAAAANHhkqwoRna2vqIVWHNKwOvxm26n
        stage: '', // sample: 6LcZmLEZAAAAANHhkqwoRna2vqIVWHNKwOvxm26n
        prod: '', // sample: 6LcZmLEZAAAAANHhkqwoRna2vqIVWHNKwOvxm26n
    },
};

/* List Of CMS Pages: [url-1, url-2, ..., url-n] */
const cmsPages = ['about-us', 'aw-reward-points'];

/* Contact Us */
// identifiers for cmsBlocks in contact page
const cmsContactIdentifiers = 'weltpixel_contact_page';

/* Dashboard */
// identifiers for cmsBlocks in contact page
const cmsSocialMediaLinkIdentifiers = 'pwa_socmed_links';

/* Social media link */
// social media link in dashboard
const enableSocialMediaLink = true;

/* Loader */
const loaderImage = '/assets/img/loader.svg';

/* --------------------------------------- */
/* LOCAD DATA CACHE & COKIES
/* --------------------------------------- */

const expiredCokies = 6;
const storeConfigNameCokie = 'storeConfig';
const nameCartId = 'nci';
const custDataNameCookie = 'cdt';
const nameCheckoutCookie = 'ccdt';
const nameGlobalCookie = 'spwa';
const nameToken = 'sk';
const expiredToken = new Date(Date.now() + 1000 * 60 * 60);
const expiredDefault = 365;

const features = {
    ssrCache: true,
    facebookMetaId: {
        enabled: false,
        app_id: '', // if enabled add fb app id here. e.g. 3080154482073095
    },
    // masuk module -> pindah jika module sudah siap
    productAvailableToCart: {
        SimpleProduct: true,
        ConfigurableProduct: true,
        VirtualProduct: true,
        GroupedProduct: false,
        BundleProduct: false,
        DownloadableProduct: false,
    },
    imageSize: {
        product: {
            width: 240,
            height: 300,
        },
        homeSlider: {
            width: 960,
            height: 1120,
        },
        category: {
            width: 960,
            height: 577,
        },
    },
    vesMenu: {
        enabled: true,
    },
};

const modules = {
    about: {
        enabled: true,
        path: '/about-us',
    },
    blog: {
        enabled: true,
        path: '/blog',
    },
    brands: {
        enabled: true,
        path: '/brands',
    },
    catalog: {
        enabled: true,
        productListing: {
            configurableOptions: {
                enabled: true,
            },
            rating: {
                enabled: true,
            },
        },
    },
    confirmpayment: {
        enabled: true,
        path: '/confirmpayment',
    },
    checkout: {
        enabled: true,
        path: '/checkout',
        snapUrl: {
            dev: 'https://app.sandbox.midtrans.com/snap/snap.js',
            prod: 'https://app.midtrans.com/snap/snap.js',
        },
        pickupStore: {
            enabled: true,
        },
    },
    cart: {
        enabled: true,
        path: '/checkout/cart',
    },
    customer: {
        enabled: true,
        path: '/customer',
    },
    contact: {
        enabled: true,
        path: '/contact',
    },
    forgotpassword: {
        enabled: true,
        path: '/customer/account/forgotpassword',
    },
    rewardpoint: {
        enabled: true,
        path: '/aw_rewardpoints/info',
    },
    rma: {
        enabled: true,
        path: '/rma/customer',
    },
    storecredit: {
        enabled: true,
        path: '/customer/account/storecredit',
    },
    giftcard: {
        enabled: true,
        path: '/awgiftcard/card',
    },
    login: {
        enabled: true,
        path: '/customer/account/login',
    },
    notification: {
        enabled: true,
        path: 'inboxnotification/notification',
    },
    register: {
        enabled: true,
        path: '/customer/account/create',
    },
    trackingorder: {
        enabled: true,
        path: '/sales/order/track',
    },
    thanks: {
        enabled: true,
        path: '/checkout/onepage/success',
    },
    home: {
        enabled: true,
        featuresProduct: {
            enable: true,
            url_key: 'homepage-featured-products',
        },
        categoryList: {
            enable: true,
            url_key: 'homepage-featured-categories',
        },
        bannerSlider: {
            enable: true,
        },
    },
    promo: {
        enabled: true,
    },
    order: {
        enabled: true,
        path: '/sales/order',
    },
    wishlist: {
        enabled: true,
        path: '/wishlist',
    },
    maintenance: {
        enabled: true,
        path: '/maintenance',
    },
    error: {
        enabled: true,
    },
};

const nossrCache = [
    '/aw_rewardpoints/info',
    '/sales/order/history',
    '/customer/account/profile',
    '/customer/account/address',
    '/awgiftcard/card',
    '/customer/account/storecredit',
    '/inboxnotification/notification',
    '/customer/setting',
    '/rma/customer',
    '/confirmpayment',
    '/checkout',
    '/checkout/cart',
    '/graphql',
];

const debuging = {
    originalError: false,
};

module.exports = {
    debuging,
    GTM,
    HOST,
    graphqlEndpoint,
    shareIcon,
    passwordStrength,
    languagesLabel,
    expiredCokies,
    storeConfigNameCokie,
    nameCartId,
    nameToken,
    expiredToken,
    expiredDefault,
    cmsPages,
    loaderImage,
    cmsContactIdentifiers,
    cmsSocialMediaLinkIdentifiers,
    custDataNameCookie,
    nameCheckoutCookie,
    nameGlobalCookie,
    enableSocialMediaLink,
    features,
    nossrCache,
    recaptcha,
    modules,
};
