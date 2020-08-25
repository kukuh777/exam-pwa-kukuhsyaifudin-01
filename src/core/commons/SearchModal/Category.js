import React from 'react';
import Typography from '@common_typography';
import Button from '@common_button';
import Slide from '@material-ui/core/Slide';
import Router from 'next/router';
import { modules } from '@config';
import useStyles from './style';

const Category = ({
    open,
    setOpenModal,
    data,
    onClick,
    direction = 'left',
    slide = false,
}) => {
    const styles = useStyles();

    const content = () => (
        <div className={styles.body}>
            <div className={styles.item}>
                {data.length
                    ? data.map((catlvl1, index) => (
                        <div key={index} className="column">
                            <Button
                                fullWidth
                                variant="text"
                                onClick={() => {
                                    setOpenModal(false);
                                    setTimeout(() => {
                                        Router.push(
                                            '/[...slug]',
                                            `/${catlvl1.url_key}`,
                                        );
                                    }, 200);
                                }}
                            >
                                <Typography variant="label" size="14" letter="uppercase" type="bold" align="center">
                                    {catlvl1.name}
                                </Typography>
                            </Button>
                            {catlvl1.children.map((catlvl2, indx) => (
                                <Button
                                    key={indx}
                                    fullWidth
                                    variant="text"
                                    onClick={() => onClick(catlvl2)}
                                    className={indx === catlvl1.children.length - 1 ? styles.lastCat : styles.cat}
                                >
                                    <Typography
                                        variant="span"
                                        letter="capitalize"
                                        size="14"
                                        align="center"
                                    >
                                        {catlvl2.name}
                                    </Typography>

                                </Button>
                            ))}
                        </div>
                    ))
                    : null}
                {modules.brands.enabled ? (
                    <Button
                        variant="text"
                        onClick={() => {
                            setOpenModal(false);
                            setTimeout(() => {
                                Router.push(
                                    '/brands',
                                );
                            }, 200);
                        }}
                        fullWidth
                    >
                        <Typography type="bold" letter="uppercase" variant="span" align="center" size="14">
                            Brands
                        </Typography>
                    </Button>

                ) : null }

            </div>
        </div>
    );

    if (slide === true) {
        return (
            <Slide
                direction={direction}
                in={open}
                timeout={300}
                mountOnEnter
                unmountOnExit
            >
                {content()}
            </Slide>
        );
    }

    return <>{content()}</>;
};

export default Category;
