import useStyles from "./style";
import Carousel from "@components/Slider/Carousel";
import Typography from "@components/Typography";

const CrossSell = (props) => {
  const { t, editMode = false } = props;
  const styles = useStyles();
  const customStyle = !editMode ? styles.margin : "";
  return (
    <>
      <div className={customStyle}>
        <Typography
          variant="h3"
          type="bold"
          letter="uppercase"
          align="center"
          className={styles.crossselTitle}
        >
          {t("cart:crossell:title")}
        </Typography>
        <div className={styles.slider}>
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default CrossSell;
