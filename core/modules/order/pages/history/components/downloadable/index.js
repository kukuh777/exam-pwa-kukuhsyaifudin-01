import { useState } from 'react';
import cx from 'classnames';
import Link from 'next/link';
import Layout from '@layout_customer';
import Typography from '@common_typography';
import Pagination from '@common_pagination';
import Alert from '@common/Alert';
import Show from '@common_show';
import formatDate from '@helper_date';
import ArrowDownTrayIcon from '@heroicons/react/24/outline/ArrowDownTrayIcon';
import { SkeletonDesktop, SkeletonMobile } from '@core_modules/order/pages/history/components/downloadable/skeleton';

const MobileTableItemComponent = ({ label, value, CustomComponentValue }) => (
    <div className={cx('flex flex-row')}>
        <div className={cx('mobile:w-[30%] tablet:w-[35%]')}>
            <Typography variant="bd-2b" className={cx('!font-semibold')}>
                {label}
            </Typography>
        </div>
        <div className="w-[5%]">
            <Typography variant="bd-2b">{' : '}</Typography>
        </div>
        <div className={cx('mobile:w-[65%] tablet:w-[60%]')}>
            <Show when={!!CustomComponentValue}>{CustomComponentValue}</Show>
            <Show when={!CustomComponentValue}>
                <Typography variant="bd-2b">{value}</Typography>
            </Show>
        </div>
    </div>
);

const DefaultView = (props) => {
    const {
        data, t, loading, error,
    } = props;

    const [page, setPage] = useState(1);
    const itemCount = data?.length;
    const itemLimit = 10;
    const totalPage = itemCount < itemLimit ? 1 : Math.ceil(itemCount / itemLimit);

    const itemList = Array.from({ length: totalPage }, (_, i) => data.slice(i * itemLimit, i * itemLimit + itemLimit));

    const handleChangePage = (value) => {
        setPage(value);
    };

    const hasData = itemCount > 0;

    const PaginationComponent = () => (
        <div className={cx('table-data pt-6 flex justify-between', 'tablet:items-center tablet:flex-row', 'mobile:flex-col')}>
            <div className="flex justify-between items-center flex-1">
                <Typography className={cx('font-normal', 'leading-2lg')}>{`${itemCount ?? 0} ${t('common:label:data')}`}</Typography>
            </div>
            <div className={cx('flex', 'flex-row', 'items-center', 'mobile:max-tablet:pt-4', 'mobile:max-tablet:justify-center')}>
                <Pagination handleChangePage={handleChangePage} page={page} siblingCount={0} className={cx('!p-0')} totalPage={totalPage} />
            </div>
        </div>
    );

    return (
        <Layout t={t} wishlist={[]}>
            <div className={cx('pt-[20px]')}>
                {/** Desktop */}
                <div className={cx('mobile:max-desktop:hidden')}>
                    <div className={cx('relative', 'overflow-x-auto', 'rounded-lg')}>
                        <table className={cx('w-full', 'text-base', 'border-[1px]', 'border-neutral-100')}>
                            <thead>
                                <tr className={cx('text-neutral-500', 'font-semibold', 'leading-2lg', 'text-left')}>
                                    <th className={cx('px-4', 'py-3')}>
                                        {t('order:order')}
                                        {' '}
                                        #
                                    </th>
                                    <th className={cx('px-4', 'py-3')}>{t('order:date')}</th>
                                    <th className={cx('px-4', 'py-3')}>{t('order:titleDownload')}</th>
                                    <th className={cx('px-4', 'py-3')}>{t('order:status')}</th>
                                    <th className={cx('px-4', 'py-3')}>{t('order:remaining')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Show when={loading}>
                                    <SkeletonDesktop />
                                </Show>

                                <Show when={!loading}>
                                    <Show when={error}>
                                        <Alert severity="error" withIcon>
                                            {error?.message ?? t('common:error:fetchError')}
                                        </Alert>
                                    </Show>

                                    <Show when={!error}>
                                        <Show when={hasData}>
                                            {itemList?.[page - 1]?.map((val, index) => (
                                                <tr className={cx('even:bg-white', 'odd:bg-neutral-50')} key={index}>
                                                    <td className={cx('p-4')}>
                                                        <Link
                                                            href={`/sales/order/view/order_id/${val.order_increment_id}`}
                                                            className={cx('hover:underline')}
                                                        >
                                                            <Typography variant="bd-2b" className={cx('!text-primary-700', 'hover:underline')}>
                                                                {val.order_increment_id}
                                                            </Typography>
                                                        </Link>
                                                    </td>
                                                    <td className={cx('p-4')}>
                                                        <Typography variant="bd-2b">{formatDate(val.date, 'DD/MM/YYYY')}</Typography>
                                                    </td>
                                                    <td className={cx('p-4')}>
                                                        <div>
                                                            <Typography variant="bd-2b">{val.title}</Typography>
                                                        </div>
                                                        <Show when={val.status === 'available'}>
                                                            <Link href={val.download_url} target="_blank" rel="noreferrer">
                                                                <div
                                                                    className={cx(
                                                                        'flex flex-row items-center',
                                                                        'text-primary-700',
                                                                        'border-b-[1px] border-neutral-white',
                                                                        'hover:border-primary-700',
                                                                        'w-max',
                                                                    )}
                                                                >
                                                                    <div className="h-[15px] w-[15px] mr-[5px]">
                                                                        <ArrowDownTrayIcon />
                                                                    </div>
                                                                    <Typography variant="bd-2b" className={cx('!text-primary-700')}>
                                                                        {val.link_title}
                                                                    </Typography>
                                                                </div>
                                                            </Link>
                                                        </Show>
                                                    </td>
                                                    <td className={cx('text-neutral-700', 'text-base', 'font-normal', 'leading-2lg', 'p-4')}>
                                                        <Typography variant="bd-2b">{val.status}</Typography>
                                                    </td>
                                                    <td className={cx('text-neutral-700', 'text-base', 'font-normal', 'leading-2lg', 'p-4')}>
                                                        <Typography variant="bd-2b">{val.remaining_downloads}</Typography>
                                                    </td>
                                                </tr>
                                            ))}
                                        </Show>

                                        <Show when={!hasData}>
                                            <tr className={cx('even:bg-white', 'odd:bg-neutral-50')}>
                                                <td colSpan={5} className="p-4">
                                                    <Alert severity="warning" withIcon>
                                                        {t('customer:order:emptyMessage')}
                                                    </Alert>
                                                </td>
                                            </tr>
                                        </Show>
                                    </Show>
                                </Show>
                            </tbody>
                        </table>
                    </div>
                    {/** show pagination */}
                    <Show when={hasData}>
                        <PaginationComponent />
                    </Show>
                </div>

                {/** Mobile */}
                <div className={cx('desktop:hidden', 'pt-[10px]')}>
                    <div className={cx('mobile-title')}>
                        <Typography variant="bd-2b" className={cx('text-lg font-semibold')}>
                            {t('customer:menu:myDownload')}
                        </Typography>
                    </div>
                    <div className={cx('divider', 'border-b-[1.5px] border-neutral-200', 'mt-[16px]', 'mobile:!mb-[20px] tablet:mb-[24px]')} />

                    <Show when={loading}>
                        <SkeletonMobile />
                    </Show>

                    <Show when={!loading}>
                        <Show when={error}>
                            <Alert severity="error" withIcon>
                                {error?.message ?? t('common:error:fetchError')}
                            </Alert>
                        </Show>

                        <Show when={!error}>
                            <Show when={hasData}>
                                <>
                                    {itemList?.[page - 1]?.map((val, index) => (
                                        <div
                                            key={`mobile-downloadable-item-${index}`}
                                            className={cx(
                                                'mobile-downloadable-item',
                                                'flex',
                                                'flex-col',
                                                'border-[1px] border-neutral-200',
                                                'rounded-[6px]',
                                                'px-[24px]',
                                                'py-[20px]',
                                                'mobile:!mb-[16px] tablet:!mb-[24px]',
                                            )}
                                        >
                                            <MobileTableItemComponent
                                                label={`${t('order:order')} #`}
                                                CustomComponentValue={(
                                                    <Link
                                                        href={`/sales/order/view/order_id/${val.order_increment_id}`}
                                                        className={cx('hover:underline')}
                                                    >
                                                        <Typography variant="bd-2b" className={cx('!text-primary-700', 'hover:underline')}>
                                                            {val.order_increment_id}
                                                        </Typography>
                                                    </Link>
                                                )}
                                            />
                                            <MobileTableItemComponent label={t('order:date')} value={formatDate(val.date, 'DD/MM/YYYY')} />
                                            <MobileTableItemComponent
                                                label={t('order:titleDownload')}
                                                CustomComponentValue={(
                                                    <>
                                                        <div>
                                                            <Typography variant="bd-2b">{val.title}</Typography>
                                                        </div>
                                                        <Show when={val.status === 'available'}>
                                                            <Link href={val.download_url} target="_blank" rel="noreferrer">
                                                                <div
                                                                    className={cx(
                                                                        'flex flex-row items-center',
                                                                        'text-primary-700',
                                                                        'border-b-[1px] border-neutral-white',
                                                                        'hover:border-primary-700',
                                                                    )}
                                                                >
                                                                    <div className="h-[15px] w-[15px] mr-[5px]">
                                                                        <ArrowDownTrayIcon />
                                                                    </div>
                                                                    <Typography variant="bd-2b" className={cx('!text-primary-700')}>
                                                                        {val.link_title}
                                                                    </Typography>
                                                                </div>
                                                            </Link>
                                                        </Show>
                                                    </>
                                                )}
                                            />
                                            <MobileTableItemComponent label={t('order:status')} value={val.status} />
                                            <MobileTableItemComponent label={t('order:remaining')} value={val.remaining_downloads} />
                                        </div>
                                    ))}
                                    <PaginationComponent />
                                </>
                            </Show>
                            <Show when={!hasData}>
                                <Alert severity="warning" withIcon>
                                    {t('customer:order:emptyMessage')}
                                </Alert>
                            </Show>
                        </Show>
                    </Show>
                </div>
            </div>
        </Layout>
    );
};

export default DefaultView;
