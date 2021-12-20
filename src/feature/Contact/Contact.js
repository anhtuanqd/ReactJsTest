import React from "react";
import Iframe from 'react-iframe';
import { Link } from "react-router-dom";

// import anh1 from "../../assets/images/client-01.png";
import dummyCarouselContact from "../../dummy-data/carouselContact.json";
import SectionTitle from "../../components/molecules/SectionTitle/SectionTitle";
import Banner from "../../components/molecules/Banner/Banner";
import Row from "../../components/atoms/Row/Row";
import Col from "../../components/atoms/Col/Col";
import Container from "../../components/atoms/Container/Container";
import Button from  "../../components/atoms/Button/Button";
import SocialMedia from "../../components/molecules/SocialMedia/SocialMedia";

import commonStyle from "../../styles/commonStyle.module.css";
import styles from "./Contact.module.css";
import Img from "../../components/atoms/Img/Img";

const Contact = () => {
  return (
    <>
      <Banner datas={dummyCarouselContact.contact} />
      <div className={styles.findUs}>
        <Container>
          <Row>
            <Col className={commonStyle.col12}>
              <SectionTitle title="Vị trí của chúng tôi trên Bản đồ" />
            </Col>
            <Col className={commonStyle.col8}>
              <div className={styles.map}>
                <Iframe
                  src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                  allowfullscreen
                  frameborder="0"
                ></Iframe>
              </div>
            </Col>
            <Col className={commonStyle.col4}>
              <div className={styles.leftContent}>
                <h4>Văn phòng của chúng tôi</h4>
                <p className={commonStyle.p}>
                Thương hiệu thời trang nam HT Store được thành lập từ tháng 1 năm 2021, 
                là thương hiệu thời trang uy tín hàng đầu tại Việt Nam dành riêng cho phái mạnh.
                  <br />
                  <br />
                  HT Store chuyên cung cấp vest nam, phụ kiện, quần âu,... đa dạng mẫu mã cho nam giới.
                   Những mẫu áo quần nam của HT Store thể hiện sự tinh tế, lịch lãm và luôn là những mẫu mới nhất của thị trường.
                    Hiện nay HT Store có rất nhiều cơ sở trên toàn quốc hoặc bạn có thể đặt hàng online qua website của HT Store
                     để có những mẫu mới và hợp với mình nhất.
                </p>
                <SocialMedia/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.sendMessage}>
        <Container>
          <Row>
            <Col>
              <SectionTitle title="Gửi tin nhắn cho chúng tôi" />
            </Col>
            <Col className={commonStyle.col8}>
              <div className={styles.contactForm}>
                <form id="contact" action="" method="post">
                  <div className="row">
                    <div>
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Full Name"
                          required
                        />
                      </fieldset>
                    </div>
                    <div>
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="E-Mail Address"
                          required
                        />
                      </fieldset>
                    </div>
                    <div>
                      <fieldset>
                        <input
                          name="subject"
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                          required
                        />
                      </fieldset>
                    </div>
                    <div>
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          className="form-control"
                          id="message"
                          placeholder="Your Message"
                          required
                        ></textarea>
                      </fieldset>
                    </div>
                    <div>
                      {/* <Link to="/contact"> */}
                      <Button type="submit" >Send Message</Button>
                      {/* </Link> */}
                    </div>
                  </div>
                </form>
              </div>
            </Col>
            <div className={commonStyle.col4}>
              <ul className={styles.accordion}>
                <li>
                  <Link to="/contact">Lịch sử hình thành của HT Store</Link>
                  <p className={commonStyle.p}>
                  HT Store ra đời nhằm khởi đầu ở một cửa hàng nhỏ trên phố Lò Đúc.
                   HT Store những ngày đầu được gây dựng bởi 4 chàng trai trẻ tuổi, ôm trong mình hoài bão thay 
                   đổi xu hướng thời trang Việt Nam. 
                    <br />
                    <br />
                    Bằng đam mê với vest và bằng những cố gắng bền bỉ trong từng giây phút, 
                   HT Store đã tiên phong trong ngành thời trang, thay đổi tư duy khách hàng, trở thành thương hiệu Việt Nam 
                   lớn nhất trong thị phần vest may sẵn, là thương hiệu uy tín về đồ Âu cho nam giới.
                  </p>
                </li>
                <li>
                  <Link to="/">Trang chủ</Link>
                </li>
                <li>
                  <Link to="/products">Sản phẩm của chúng tôi</Link>
                </li>
                <li>
                  <Link to="/about">Thành viên</Link>
                </li>
              </ul>
            </div>
          </Row>
        </Container>
      </div>

      <div className={styles.happyClients}>
        <Container>
          <Row>
            <Col className={commonStyle.col12}>
              <SectionTitle title="Khách hàng của chúng tôi" />
            </Col>
            <Col className={commonStyle.col2}>
              <Img src="https://vestviet.com/images/ckeditor/images/Bi%20quyet%20mac%20vest%20nam%20dep.jpg" />
            </Col>
            <Col className={commonStyle.col2}>
              <Img src="https://lavenderstudio.com.vn/wp-content/uploads/2019/05/image-26.png" />
            </Col>
            <Col className={commonStyle.col2}>
              <Img src="https://thesuit1991.com/upload/thesuit1991/2020/CONTENT/981.jpg" />
            </Col>
            <Col className={commonStyle.col2}>
              <Img src="https://dongphuccaocap.vn/wp-content/uploads/2016/03/18-nguyen-tac-tu-mac-vest-dep-cho-quy-ong-lich-lam-hon-1.jpg" />
            </Col>
            <Col className={commonStyle.col2}>
              <Img src="https://vestviet.com/images/ckeditor/images/Bi%20quyet%20mac%20vest%20nam%20dep3.jpg" />
            </Col>
            <Col className={commonStyle.col2}>
              <Img src="https://anhvienmimosa.com/wp-content/uploads/2019/07/chon-ao-vest-nam-chu-re-7.jpg"/>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
