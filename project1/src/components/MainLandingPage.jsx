import { useCallback } from "react";

const MainLandingPage = () => {
  const onWhyCANTextClick = useCallback(() => {
   
  }, []);

  const onAboutUsTextClick = useCallback(() => {
   
  }, []);

  const onImage1191Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='component31']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onKnowAboutCancerClick = useCallback(() => {
   
  }, []);

  return (
    <div className="relative bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[5631px] overflow-hidden text-center text-3xl text-darkslategray-200 font-rubik">
      <div className="absolute top-[0px] left-[0px] bg-darkturquoise w-[1920px] h-[873px]" />
      <img
        className="absolute top-[338px] left-[0px] w-[1928px] h-[508px] opacity-[0.5]"
        alt=""
        src="/component-33.svg"
      />
      <img
        className="absolute top-[4056px] left-[0px] w-[2193.6px] h-[796px]"
        alt=""
        src="/group-1000003131.svg"
      />
      <div className="absolute top-[4852px] left-[0px] bg-white w-[1920px] h-[773px] text-dimgray-200 font-poppins">
        <div className="absolute top-[651px] left-[1717px] w-[30px] h-[30px] overflow-hidden" />
        <img
          className="absolute top-[700px] left-[1655px] w-[35px] h-[34px] overflow-hidden"
          alt=""
          src="/instagram-1.svg"
        />
        <div className="absolute top-[328px] left-[242px] text-32xl font-cantora-one text-palevioletred-100 inline-block w-40 h-[101px]">
          CAN
        </div>
        <img
          className="absolute h-[41.53%] w-[16.46%] top-[6.86%] right-[74.95%] bottom-[51.62%] left-[8.59%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/image-119@2x.png"
        />
        <img
          className="absolute top-[688px] left-[191px] w-[30px] h-[30px] object-cover"
          alt=""
          src="/copyright-1@2x.png"
        />
        <img
          className="absolute top-[699px] left-[1590px] w-9 h-[34px] overflow-hidden"
          alt=""
          src="/twitter-1.svg"
        />
        <img
          className="absolute top-[699px] left-[1459px] w-9 h-[34px] overflow-hidden"
          alt=""
          src="/facebook-1.svg"
        />
        <div className="absolute top-[681px] left-[1507px] w-8 h-8 overflow-hidden" />
        <img
          className="absolute h-[3.08%] w-[1.75%] top-[91.07%] right-[18.79%] bottom-[5.85%] left-[79.46%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
        <div className="absolute top-[92px] left-[652px] w-72 h-[274px] text-left">
          <b className="absolute top-[0px] left-[0px] text-9xl text-palevioletred-300">
            My Space
          </b>
          <div className="absolute top-[67px] left-[0px] inline-block w-72 h-[33px]">
            My Feed
          </div>
          <div className="absolute top-[125px] left-[0px] inline-block w-72 h-[33px]">
            Appointments
          </div>
          <div className="absolute top-[183px] left-[0px] inline-block w-72 h-[33px]">
            Heath Records
          </div>
          <div className="absolute top-[241px] left-[0px] inline-block w-72 h-[33px]">
            Chats
          </div>
        </div>
        <div className="absolute top-[92px] left-[1055px] w-[289px] h-[213px] text-left">
          <b className="absolute top-[0px] left-[0px] text-9xl text-palevioletred-100 text-center">
            Navigate
          </b>
          <div
            className="absolute top-[67px] left-[1px] inline-block w-72 h-[33px] cursor-pointer"
            onClick={onWhyCANTextClick}
          >
            Why CAN
          </div>
          <div
            className="absolute top-[122px] left-[0px] inline-block w-72 h-[33px] cursor-pointer"
            onClick={onAboutUsTextClick}
          >
            About Us
          </div>
          <div className="absolute top-[180px] left-[0px] inline-block w-72 h-[33px]">
            Contact Us
          </div>
        </div>
        <div className="absolute top-[500.5px] left-[-40.5px] bg-gainsboro shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[1921px] h-px opacity-[0.3] mix-blend-normal border-t-[1px] border-solid border-black" />
        <div className="absolute top-[571px] left-[191px] rounded-sm box-border w-[254px] h-[76px] border-[1px] border-solid border-palevioletred-100" />
        <div className="absolute top-[590px] left-[275px] text-dimgray-100">
          India | English
        </div>
        <img
          className="absolute top-[590px] left-[216px] w-[30px] h-[37px] object-cover hidden"
          alt=""
          src="/usicon-1@2x.png"
        />
        <div className="absolute top-[691px] left-[234px] text-lg text-dimgray-100">
          2022-2023 CAN
        </div>
        <div className="absolute top-[691px] left-[407px] text-lg font-semibold text-gold">
          Privacy Policy/FAQ
        </div>
        <div className="absolute top-[691px] left-[613px] text-lg font-semibold text-gold">
          Terms
        </div>
        <div className="absolute top-[691px] left-[705px] text-lg font-semibold text-gold">
          Legal
        </div>
        <div className="absolute top-[92px] left-[1459px] w-72 h-40 text-left">
          <b className="absolute top-[0px] left-[0px] text-9xl text-palevioletred-200">
            Resources
          </b>
          <div className="absolute top-[69px] left-[0px] inline-block w-72 h-[33px]">{`Help & Support`}</div>
          <div className="absolute top-[127px] left-[0px] inline-block w-72 h-[33px]">
            Help a friend
          </div>
        </div>
      </div>
      <img
        className="absolute top-[65px] left-[0px] w-[1939px] h-[1053px] object-cover"
        alt=""
        src="/12301-1@2x.png"
      />
      <div className="absolute top-[1803px] left-[-64px] w-[0.35px] h-[0.35px] opacity-[0]">
        <img
          className="absolute h-full w-full top-[-0.02%] right-[-0.06%] bottom-[0.02%] left-[0.06%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/can-doodle--1@2x.png"
        />
      </div>
      <div className="absolute top-[1742.39px] left-[1754.22px] w-[91.46px] h-[116.87px] overflow-hidden [transform:_rotate(63.72deg)] [transform-origin:0_0]" />
      <div className="absolute top-[2392px] left-[calc(50%_-_518px)] text-[30.66px] leading-[112%] font-roboto text-black inline-block w-[1036px] h-[146px]">
        <p className="m-0">
          Supporting cancer patients with genuine care. We aim to create a
          platform where they find a safe space, kindling hope and strength.
          Spreading awareness, partnering with experts, nurturing well-being.
          Together, conquering cancer, inspiring healing and growth.
        </p>
      </div>
      <div className="absolute h-[1.28%] top-[71.8%] bottom-[26.92%] left-[calc(50%_-_206px)] w-[412px] text-[30.53px] text-white">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl bg-lightblue" />
        <div className="absolute top-[25%] left-[15.53%] font-semibold">
          Start Your Journey
        </div>
      </div>
      <div className="absolute top-[1226px] left-[calc(50%_-_753px)] w-[1489px] h-[190px] text-left text-[61.9px]">
        <div className="absolute top-[0px] left-[calc(50%_-_744.5px)] leading-[112%] font-semibold inline-block w-[1489px] h-[125px]">
          We can’t even imagine what you’re going through
        </div>
        <div className="absolute top-[103px] left-[calc(50%_-_661.5px)] text-[33.3px] leading-[112%] text-center inline-block w-[1329px] h-[87px] text-black font-roboto">
          <span>{`Cancer is so widespread in India `}</span>
          <b className="text-palevioletred-400">
            with 16 lakh new cases every year
          </b>
          <span>
            {" "}
            yet the community is so isolated and helpless.Let's strengthen the
            community together.
          </span>
        </div>
      </div>
      <b className="absolute top-[3942.28px] left-[calc(50%_-_394px)] text-[57.66px] leading-[112%] text-mediumvioletred text-right">
        Let’s fight cancer together!
      </b>
      <b className="absolute top-[2297px] left-[calc(50%_-_144px)] text-[57px] leading-[112%] text-right">
        <p className="m-0">Our Vision</p>
      </b>
      <img
        className="absolute top-[1409px] left-[1646px] w-[108.77px] h-[94.44px] object-cover"
        alt=""
        src="/sparrow-2-2@2x.png"
      />
      <img
        className="absolute top-[4002px] left-[1545px] w-[108.77px] h-[94.44px] object-cover"
        alt=""
        src="/sparrow-2-3@2x.png"
      />
      <div className="absolute top-[316.43px] left-[calc(50%_-_356px)] text-[54.38px] font-semibold font-roboto text-darkslategray-100">
        Join the fight against cancer!
      </div>
      <div className="absolute top-[413px] left-[calc(50%_-_112px)] rounded-[28.73px] bg-darkslategray-100 overflow-hidden flex flex-row items-center justify-center py-[8.70669174194336px] px-[38.309444427490234px] text-[23.8px] text-white font-roboto">
        <b className="relative">Join a meeting</b>
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-[2030px] h-[639px]"
        alt=""
        src="/component-31.svg"
        data-scroll-to="component31"
      />
      <img
        className="absolute top-[2471px] left-[1758.65px] w-[161.35px] h-[104.68px]"
        alt=""
        src="/group-1000002887.svg"
      />
      <img
        className="absolute top-[2468.56px] left-[0px] w-[147.51px] h-[177.72px]"
        alt=""
        src="/group-1000003125.svg"
      />
      <img
        className="absolute top-[1665px] left-[1732.91px] w-[187.09px] h-[120.68px]"
        alt=""
        src="/group-1000003109.svg"
      />
      <img
        className="absolute top-[1503px] left-[0px] w-[229.06px] h-[142.41px]"
        alt=""
        src="/group-1000003108.svg"
      />
      <img
        className="absolute top-[3838px] left-[0px] w-[442px] h-[422.26px]"
        alt=""
        src="/group-1000002889.svg"
      />
      <div className="absolute top-[3316px] left-[83.59px] w-[1768.41px] h-[455px] text-[25.04px] text-mediumvioletred font-poppins">
        <div className="absolute top-[0px] left-[0px] rounded-[73.07px] w-[1768.41px] h-[442.62px]" />
        <b className="absolute top-[190.58px] left-[162.29px] inline-block w-[256.68px] h-[29.22px]">
          CAN Companion
        </b>
        <b className="absolute top-[192.38px] left-[831.46px]">Feed</b>
        <b className="absolute top-[188.2px] left-[1279.4px]">
          Support Group Meetings
        </b>
        <div className="absolute top-[262px] left-[675.41px] text-inherit leading-[112%] font-medium font-inherit text-gray-200 text-left inline-block w-[401px] h-[193px]">
          <ul className="m-0 pl-[27px]">
            <li className="mb-0">
              Share and read your moods, thoughts and success stories
            </li>
          </ul>
          <p className="m-0">&nbsp;</p>
          <ul className="m-0 pl-[27px]">
            <li className="mb-0">
              Share your cancer timelines with a verified community on the same
              frequency.
            </li>
          </ul>
          <p className="m-0">&nbsp;</p>
          <ul className="m-0 pl-[27px]">
            <li>Find curated information on cancer</li>
          </ul>
        </div>
        <div className="absolute top-[261px] left-[96.41px] text-inherit leading-[112%] font-medium font-inherit text-gray-200 text-left inline-block w-[408px] h-[193px]">
          <ul className="m-0 pl-[27px]">
            <li className="mb-0">
              Hassle free whatsapp notification with access to your health vault
            </li>
          </ul>
          <p className="m-0">&nbsp;</p>
          <ul className="m-0 pl-[27px]">
            <li className="mb-0">
              Medicine and appointment reminders on whatsapp itself
            </li>
          </ul>
          <p className="m-0">&nbsp;</p>
          <ul className="m-0 pl-[27px]">
            <li className="mb-0">Get notifications to the meetings directly</li>
          </ul>
          <p className="m-0">&nbsp;</p>
          <ul className="m-0 pl-[27px]">
            <li>One place for all your cancer needs</li>
          </ul>
        </div>
        <div className="absolute top-[261px] left-[1261.41px] text-inherit leading-[112%] font-medium font-inherit text-gray-200 text-left inline-block w-[351px] h-48">
          <ul className="m-0 pl-[27px]">
            <li className="mb-0">Register for your support meetings</li>
          </ul>
          <p className="m-0">&nbsp;</p>
          <ul className="m-0 pl-[27px]">
            <li>Place to vent, share experience and learn from veterans</li>
          </ul>
        </div>
        <img
          className="absolute top-[50px] left-[802.41px] w-[118px] h-[118px] object-cover"
          alt=""
          src="/rectangle@2x.png"
        />
        <img
          className="absolute top-[49px] left-[1377.41px] w-[119px] h-[119px] object-cover"
          alt=""
          src="/rectangle1@2x.png"
        />
        <img
          className="absolute top-[41px] left-[217.41px] w-[132px] h-[131px] object-cover"
          alt=""
          src="/rectangle2@2x.png"
        />
      </div>
      <img
        className="absolute h-[7.89%] w-[69.22%] top-[48.91%] right-[15.4%] bottom-[43.2%] left-[15.38%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-1000003107.svg"
      />
      <div className="absolute top-[2619px] left-[calc(50%_-_118.71px)] w-[236.71px] h-[54.2px] text-[29.57px] text-white">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[19.04px] bg-lightblue" />
        <div className="absolute top-[19.46%] left-[22.41%] leading-[112%]">
          Our Story
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_1379.5px)] left-[calc(50%_-_583px)] w-[1125px] h-[881px] overflow-hidden text-[39.96px]">
        <div className="absolute top-[0px] left-[0px] w-[1143px] h-[916px] overflow-hidden">
          <div className="absolute top-[135px] left-[273px] w-[597px] h-[645px]">
            <div className="absolute top-[0px] left-[0px] w-[597px] h-[645px]">
              <img
                className="absolute top-[0px] left-[13px] w-[560.27px] h-[400.86px] object-cover"
                alt=""
                src="/illustration-1@2x.png"
              />
              <b className="absolute top-[462.02px] left-[0px] leading-[112%] inline-block w-[586.81px] h-[109.37px]">
                Emotional Support
              </b>
              <div className="absolute top-[526px] left-[calc(50%_-_282.5px)] text-2xl-5 leading-[112%] font-roboto text-black inline-block w-[581px] h-[119px]">
                CAN aims to provide a non- judgemental empathetic space to the
                community so that they can be heard and understood.
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[1281px] w-[1143px] h-[916px] overflow-hidden">
          <div className="absolute top-[135px] left-[calc(50%_-_442.5px)] w-[885px] h-[646px]">
            <b className="absolute top-[465px] left-[calc(50%_-_442.5px)] leading-[112%] inline-block w-[885px] h-10">
              Positive Thinking and Coping mechanism
            </b>
            <div className="absolute top-[0px] left-[162px] w-[561.86px] h-[402px] text-left text-[8.59px] text-lightseagreen font-candal">
              <div className="absolute top-[0px] left-[0px] w-[561.86px] h-[402px]">
                <div className="absolute top-[260.74px] left-[411.84px] w-[110.77px] h-[111.34px] overflow-hidden" />
                <img
                  className="absolute h-[20.72%] w-[14.31%] top-[53.21%] right-[-10.37%] bottom-[26.07%] left-[96.06%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group1.svg"
                />
                <img
                  className="absolute h-[22.02%] w-[12.33%] top-[35.61%] right-[-5.36%] bottom-[42.37%] left-[93.03%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group2.svg"
                />
                <img
                  className="absolute h-[29.56%] w-[14.86%] top-[51.56%] right-[85.14%] bottom-[18.88%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/leaf-2.svg"
                />
                <img
                  className="absolute h-[90.07%] w-[74.28%] top-[0%] right-[11.52%] bottom-[9.93%] left-[14.2%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/blob.svg"
                />
                <img
                  className="absolute top-[0.76px] left-[79.77px] w-[417.36px] h-[361.31px]"
                  alt=""
                  src="/lights-and-leaves-animation.svg"
                />
                <div className="absolute top-[109.83px] left-[357.26px] rounded-[50%] bg-white w-[75.12px] h-[58.94px] [transform:_rotate(16.92deg)] [transform-origin:0_0]" />
                <img
                  className="absolute top-[62.11px] left-[210.57px] w-[173.35px] h-[288.89px]"
                  alt=""
                  src="/vector.svg"
                />
                <div className="absolute top-[119.92px] left-[171.18px] rounded-[50%] bg-white w-[71.15px] h-[53.99px] [transform:_rotate(-0.81deg)] [transform-origin:0_0]" />
                <img
                  className="absolute top-[144.67px] left-[237.84px] w-[35.98px] h-[12.88px]"
                  alt=""
                  src="/vector-389.svg"
                />
                <img
                  className="absolute top-[122.15px] left-[191.53px] w-[30.79px] h-[33.3px]"
                  alt=""
                  src="/vector-387.svg"
                />
                <img
                  className="absolute top-[120.44px] left-[214px] w-[18.47px] h-[14.37px]"
                  alt=""
                  src="/vector-388.svg"
                />
                <img
                  className="absolute h-[13.8%] w-[7.73%] top-[85.9%] right-[35.2%] bottom-[0.3%] left-[57.07%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/leaf.svg"
                />
                <div className="absolute top-[157.59px] left-[184.82px] leading-[112%] inline-block w-[50.75px] h-[10.6px] [transform:_rotate(-12.98deg)] [transform-origin:0_0]">
                  Positivity
                </div>
                <img
                  className="absolute h-[15.46%] w-[11%] top-[80.27%] right-[56.73%] bottom-[4.27%] left-[32.26%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/flower-6.svg"
                />
                <img
                  className="absolute h-[17.48%] w-[12.51%] top-[79.02%] right-[23.95%] bottom-[3.5%] left-[63.54%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/flower-5.svg"
                />
                <img
                  className="absolute h-[5.21%] w-[3.68%] top-[85.67%] right-[53.67%] bottom-[9.13%] left-[42.65%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/flower-4.svg"
                />
                <img
                  className="absolute h-[29.45%] w-[20.96%] top-[66.32%] right-[6.46%] bottom-[4.22%] left-[72.57%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/flower-3.svg"
                />
                <img
                  className="absolute h-[29.89%] w-[20.64%] top-[58.79%] right-[74.2%] bottom-[11.32%] left-[5.17%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/flower.svg"
                />
                <img
                  className="absolute h-1/4 w-[17.89%] top-[75%] right-[65.85%] bottom-[0%] left-[16.26%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/flower-2.svg"
                />
              </div>
              <img
                className="absolute top-[142.03px] left-[406.18px] w-[32.96px] h-[32.37px] overflow-hidden"
                alt=""
                src="/frame.svg"
              />
            </div>
            <div className="absolute top-[527px] left-[calc(50%_-_415.5px)] text-[21.95px] leading-[112%] font-roboto text-black inline-block w-[831px] h-[119px]">
              In our society, people have different ideas about cancer. But we
              should only take in things that make us feel better and ignore
              what society might say. Embracing our new life with cancer should
              actually make us happy. It’s like when they say if negative
              thoughts can have negative impact then positive thoughts do have
              positive impact.
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[2562px] w-[1143px] h-[916px] overflow-hidden">
          <div className="absolute top-[135px] left-[175px] w-[793px] h-[647px]">
            <div className="absolute top-[0px] left-[93px] w-[587px] h-[502px]">
              <b className="absolute top-[464px] left-[0px] leading-[112%] inline-block w-[587px] h-[38px]">
                You are not alone!
              </b>
              <img
                className="absolute top-[0px] left-[12px] w-[563.26px] h-[403px] object-cover"
                alt=""
                src="/illustration-2@2x.png"
              />
            </div>
            <div className="absolute top-[528px] left-[calc(50%_-_396.5px)] text-2xl-5 leading-[112%] font-roboto text-black inline-block w-[793px] h-[119px]">
              Acknowledging and learning from individual experiences. Reassuring
              individuals that their struggles are valid and they are not alone
              in this fight against cancer
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[3843px] w-[1143px] h-[916px] overflow-hidden">
          <div className="absolute top-[135px] left-[105px] w-[933px] h-[625px]">
            <div className="absolute top-[0px] left-[0px] w-[933px] h-[625px]">
              <b className="absolute top-[443px] left-[0px] leading-[112%] inline-block w-[933px] h-[42px]">
                Empathy comes from shared experiences
              </b>
              <div className="absolute top-[506px] left-[35px] text-[21.95px] leading-[112%] font-roboto text-black inline-block w-[863px] h-[119px]">
                Opening up and venting your cancer-related concerns will provide
                a sense of connection, as people on the same boat will truly
                empathise with your experiences and offer a warm and comforting
                presence.
              </div>
              <img
                className="absolute top-[0px] left-[157.86px] w-[566.05px] h-[405px]"
                alt=""
                src="/illustration-4.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[820px] left-[477px] w-[188px] h-4 text-[14.32px] font-roboto">
          <img
            className="absolute top-[2px] left-[0px] w-[124.97px] h-[13px]"
            alt=""
            src="/group-1000003130.svg"
          />
          <div className="absolute top-[0px] left-[137px] w-[51px] h-4">
            <div className="absolute top-[0%] left-[0%] leading-[112%]">
              View All
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute h-[5.86%] w-[66.77%] top-[3.52%] right-[16.52%] bottom-[90.62%] left-[16.72%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/component-81.svg"
      />
      <div className="absolute h-[1.29%] w-[4.15%] top-[70.82%] right-[78.03%] bottom-[27.89%] left-[17.81%]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/sparrow-3@2x.png"
        />
      </div>
      <img
        className="absolute top-[5437px] left-[206px] w-12 h-12 overflow-hidden"
        alt=""
        src="/emojioneflagforindia.svg"
      />
      <div className="absolute top-[45px] left-[calc(50%_-_527px)] w-[1054px] h-[81px] text-[15.51px] font-poppins">
        <div className="absolute h-[91.75%] w-full top-[1.52%] right-[0%] bottom-[6.73%] left-[0%] shadow-[0px_10px_25px_rgba(0,_0,_0,_0.1)]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-122xl bg-white" />
        </div>
        <div className="absolute h-full w-[87.33%] top-[0%] right-[5.74%] bottom-[0%] left-[6.93%]">
          <img
            className="absolute h-full w-[8.87%] top-[0%] right-[47.78%] bottom-[0%] left-[43.35%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
            alt=""
            src="/image-1191@2x.png"
            onClick={onImage1191Click}
          />
          <div className="absolute h-[28.4%] w-[9.34%] top-[32.56%] right-[90.66%] bottom-[39.05%] left-[0%]">
            <div className="absolute w-[65.12%] top-[0%] left-[34.88%] font-semibold inline-block">
              Search
            </div>
            <img
              className="absolute h-[88.32%] w-[23.62%] top-[7.09%] right-[76.38%] bottom-[4.59%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector1.svg"
            />
          </div>
          <div className="absolute h-[28.4%] w-[11.57%] top-[32.1%] right-[28.9%] bottom-[39.51%] left-[59.53%]">
            <div className="absolute w-[72.33%] top-[0%] left-[27.67%] font-semibold inline-block">
              My Space
            </div>
            <img
              className="absolute h-[84.28%] w-[18.21%] top-[6.74%] right-[81.79%] bottom-[8.98%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector2.svg"
            />
          </div>
          <div className="absolute h-[45.81%] w-[22.32%] top-[24.69%] right-[0%] bottom-[29.5%] left-[77.68%] text-[14.75px] text-white">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[38.05px] bg-darkslategray-200" />
            <div className="absolute w-[70.66%] top-[20.51%] left-[23.63%] font-semibold inline-block">
              Join a meeting
            </div>
            <img
              className="absolute h-[58.97%] w-[10.65%] top-[20.51%] right-[75%] bottom-[20.51%] left-[14.35%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector3.svg"
            />
          </div>
        </div>
        <div className="absolute h-[27.4%] w-[16.32%] top-[32.9%] right-[60.06%] bottom-[39.71%] left-[23.62%] text-[14.34px]">
          <img
            className="absolute h-[95.83%] w-[13.98%] top-[4.17%] right-[87.1%] bottom-[0%] left-[-1.07%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/healthiconsbloodcells.svg"
          />
          <div
            className="absolute top-[0%] left-[15.59%] font-semibold cursor-pointer"
            onClick={onKnowAboutCancerClick}
          >
            Know About Cancer
          </div>
        </div>
      </div>
      <div className="absolute top-[2582px] left-[calc(50%_-_195px)] text-[24.23px] leading-[112%] font-roboto text-gray-100">
        CAN as an initiative started because
      </div>
    </div>
  );
};

export default MainLandingPage;
