import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function FoodsItem() {
  return (
    <>
      <div className=" bg-[#c20d00] pt-12 pb-24">
        <h1 className="pt-12 mx-auto text-center text-white font-font tracking-[3px] text-[37px] font-semibold">
          WHAT KIND OF FOODS WE SERVE FOR YOU
        </h1>

        <div>
          <Container className="mt-16">
            <Row>
              <Col>
                <div className=" text-center pt-8 pb-8 pl-4 pr-4">
                  <div className=" ">
                    <img
                      className=" mx-auto rounded-full h-[152px] w-[152px]  "
                      src="public/1.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-[#ffc80a] mt-8 text-[16px] font-font  tracking-[2px]">
                      CRISPY FRIED CHICKEN
                    </h1>
                    <p className=" text-white text-[16px] mt-1 font-font">
                      Price Starts from BDT ৳120
                    </p>
                  </div>
                </div>
              </Col>

              <Col>
                <div className=" text-center pt-8 pb-8 pl-4 pr-4">
                  <div className=" ">
                    <img
                      className=" mx-auto rounded-full h-[152px] w-[152px]  "
                      src="public/2.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-[#ffc80a] mt-8 text-[16px] font-font  tracking-[2px]">
                    BURGER
                    </h1>
                    <p className=" text-white text-[16px] mt-1 font-font">
                    Price Starts from BDT ৳175
                    </p>
                  </div>
                </div>
              </Col>

              <Col>
                <div className=" text-center pt-8 pb-8 pl-4 pr-4">
                  <div className=" ">
                    <img
                      className=" mx-auto rounded-full h-[152px] w-[152px]  "
                      src="public/3.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-[#ffc80a] mt-8 text-[16px] font-font  tracking-[2px]">
                    RICE ITEMS
                    </h1>
                    <p className=" text-white text-[16px] mt-1 font-font">
                    Price Starts from BDT ৳200
                    </p>
                  </div>
                </div>
              </Col>

              <Col>
                <div className=" text-center pt-8 pb-8 pl-4 pr-4">
                  <div className=" ">
                    <img
                      className=" mx-auto rounded-full h-[152px] w-[152px]  "
                      src="public/4.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-[#ffc80a] mt-8 text-[16px] font-font  tracking-[2px]">
                    SIDE ITEMS
                    </h1>
                    <p className=" text-white text-[16px] mt-1 font-font">
                    Price Starts from BDT ৳65
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default FoodsItem;
