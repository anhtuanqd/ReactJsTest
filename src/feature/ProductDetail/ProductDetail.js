import { Carousel } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import productItemDummyData from "../../dummy-data/carouselProductItem.json";

import Container from "../../components/atoms/Container/Container";
import Row from "../../components/atoms/Row/Row";
import SectionTitle from "../../components/molecules/SectionTitle/SectionTitle";
import Col from "../../components/atoms/Col/Col";

import commonStyle from "../../styles/commonStyle.module.css";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  return (
    <div className={styles.productDetail}>
      <Container>
        <Row className={styles.pd60}>
          <SectionTitle title="Chi tiết sản phẩm" />
          <Col className={commonStyle.col6}>
            <Carousel>
              {productItemDummyData.productItem.map((data) => (
                <Carousel.Item key={data.id} className={styles.item}>
                  <img
                    key={data.id}
                    className="d-block w-100"
                    src={data.src}
                    alt={data.alt}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col className={commonStyle.col6}>
            <div className={styles.downContent}>
              <h4>ÁO THUN W1ATN11101FOSHT</h4>
              <p>265,000₫</p>
              <Link to="/">Hướng dẫn chọn size</Link>
              <div>
                <p>Màu sắc:</p>
                <div>
                  <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211109/09112021121127_1000_x_1500__Dai_dien_5.jpg" alt="Ảnh đẹp" width={75} height={75} />
                  <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211109/09112021121138_1000_x_1500__Dai_dien_3.jpg" alt="Ảnh đẹp" width={75} height={75} />
                  <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211109/09112021121151_1000_x_1500__Dai_dien_2.jpg" alt="Ảnh đẹp" width={75} height={75} />
                  <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211109/09112021121107_1000_x_1500__Dai_dien_1.jpg" alt="Ảnh đẹp" width={75} height={75} />
                </div>
                <div>
                  <div>
                    <p>Kích cỡ</p>                   
                      <p>M</p>
                      <p>L</p>
                      <p>XL</p>
                  </div>
                  <div>Số Lượng:
                  <input type="number" name="quantity" min="1" max="5" />
                  </div>
                </div>
              </div>
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
