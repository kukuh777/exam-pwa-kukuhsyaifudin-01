import Page from '@core_modules/customer/pages/profile';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps(ctx) {
    return {
        props: {
            ...(await serverSideTranslations(ctx.locale, ['common', 'customer', 'validate'])),
        },
    };
};
export default Page;
