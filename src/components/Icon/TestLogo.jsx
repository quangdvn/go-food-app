import React from 'react';
import {
  Svg,
  Path,
  G,
  Defs,
  Rect,
  ClipPath,
  Ellipse,
  Line,
  Circle,
  Mask,
  Pattern,
  Use,
  Image,
  Stop,
  LinearGradient,
} from 'react-native-svg';
import { Text, View, Dimensions } from 'react-native';

export const AppLogo = () => {
  return (
    <Svg
      width="250px"
      height="100px"
      viewBox="0 0 96 42"
      version="1.1"
      xmlns="http://www.w3.org/2000/Svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <Defs>
        <LinearGradient
          x1="29.3367347%"
          y1="100%"
          x2="70.6632653%"
          y2="0%"
          id="LinearGradient-1"
        >
          <Stop stop-color="#009245" offset="0%"></Stop>
          <Stop stop-color="#8CC631" offset="100%"></Stop>
        </LinearGradient>
        <LinearGradient
          x1="44.4474017%"
          y1="13.9385491%"
          x2="81.8653344%"
          y2="-5.81600448%"
          id="LinearGradient-2"
        >
          <Stop stop-color="#009245" offset="0%"></Stop>
          <Stop stop-color="#8CC631" offset="100%"></Stop>
        </LinearGradient>
        <LinearGradient
          x1="0%"
          y1="55.9848162%"
          x2="100%"
          y2="44.0151838%"
          id="LinearGradient-3"
        >
          <Stop stop-color="#8CC631" offset="0%"></Stop>
          <Stop stop-color="#009245" offset="100%"></Stop>
        </LinearGradient>
      </Defs>
      <G
        id="Symbols"
        stroke="none"
        stroke-width="1"
        fill="#009245"
        fill-rule="evenodd"
      >
        <G id="Logo-/-Dark-Logo">
          <G id="Logo">
            <G id="Group-2">
              <G id="Big-Shape-Copy">
                <Path
                  d="M26.0960187,15.9825821 C23.6539943,25.5617193 13.3227167,36.75 13.3227167,36.75 C13.3227167,36.75 2.77847196,25.5001932 0.383773634,15.921056 C-1.73170097,7.44938828 5.22049633,0 13.332182,0 C21.4438676,0 28.2540867,7.52037991 26.0960187,15.9825821 Z"
                  id="Shape"
                  fill="#009245"
                ></Path>
                <Path
                  d="M19.8354808,33.2871793 C23.0115493,34.0045968 25.1116436,35.1585154 25.1116436,36.2216764 C25.1116436,38.0152203 19.7404148,39.856304 13.1765399,39.856304 C6.61266499,39.856304 1.37539283,37.9331063 1.37539283,36.2216764 C1.37539283,35.1196193 3.45388121,33.9613789 6.6342709,33.2569267 L6.25,32.125 C2.19673162,33.0714726 0,34.0558566 0,36.1951439 C0,39.3759832 5.62311439,41.25 13.25,41.25 C20.8768856,41.25 26.375,39.4969934 26.375,36.1951439 C26.375,34.0904309 24.2278048,33.0714726 20.1875,32.125 L19.8354808,33.2871793 Z"
                  id="Path"
                  fill="#009245"
                ></Path>
              </G>
              <G
                id="Group-Copy"
                transform="translate(5.500000, 8.000000)"
                stroke="#D9EBC0"
                stroke-width="0.5"
              >
                <Ellipse
                  id="Oval"
                  cx="8.11868687"
                  cy="6.25"
                  rx="5.36868687"
                  ry="6"
                ></Ellipse>
                <Ellipse
                  id="Oval"
                  cx="8.13157895"
                  cy="6.25"
                  rx="3.00657895"
                  ry="3.5"
                ></Ellipse>
                <Path
                  d="M15.5,0.00905811995 C15.5,0.00905811995 15.5,3.69693429 15.5,11.0726866 L15.5,12.375 C15.3957337,12.375 15.2915398,12.375 15.1874185,12.375 C15.0832971,12.375 14.9791757,12.375 14.8750544,12.375 L14.8750544,6.42857143 L14.2501087,6.42857143 C14.2472877,4.3063534 14.2993665,2.93977999 14.4063451,2.3288512 C14.8621806,-0.274314113 15.5,0.00905811995 15.5,0.00905811995 Z"
                  id="Path"
                ></Path>
                <Path
                  d="M1.99102647,0 C2.00299118,1.51126703 2.00299118,2.51305274 1.99102647,3.00535714 C1.94857852,4.75193782 1.98144144,5.30357143 1.83859654,5.30357143 C1.63535663,5.30357143 1.43211673,5.30357143 1.22887682,5.30357143 C1.22887682,7.26785714 1.22887682,8.74107143 1.22887682,9.72321429 C1.22887682,10.7053571 1.22887682,11.5892857 1.22887682,12.375 L0.619157095,12.375 L0.619157095,5.30357143 C0.619157095,5.30357143 0.466727164,5.30357143 0.161867302,5.30357143 C-0.0289390846,5.30357143 0.041013975,4.56718338 0.0094373712,3.18214286 C-0.0031457904,2.63020925 -0.0031457904,1.56949497 0.0094373712,0"
                  id="Path-2"
                ></Path>
                <Line
                  x1="0.875"
                  y1="-2.20483354e-15"
                  x2="0.875"
                  y2="3.875"
                  id="Path-3"
                ></Line>
                <Line
                  x1="-8.8817842e-16"
                  y1="0.1875"
                  x2="2"
                  y2="0.1875"
                  id="Path-4"
                ></Line>
              </G>
            </G>
            <Path
              d="M40.2527785,14.1775449 C41.1623461,14.1775449 41.9892571,14.5479766 42.5881819,15.1476525 C43.1850985,15.7453177 43.555557,16.5708589 43.555557,17.4850299 L43.555557,17.4850299 L43.555557,21.242515 C43.555557,22.1518079 43.1832573,22.9784519 42.5845006,23.5779595 C41.9859485,24.1772622 41.1606498,24.55 40.2527785,24.55 C39.615553,24.55 39.0141834,24.3732239 38.5014291,24.0529184 C37.9863256,23.7311455 37.561054,23.2648656 37.2795632,22.6946909 C38.0331735,22.9037355 38.3833719,23.2883235 38.8066988,23.5543948 C39.2293548,23.8200445 39.7253428,23.9679641 40.2527785,23.9679641 C40.9934698,23.9679641 41.663262,23.670205 42.1533989,23.1891394 C42.6477854,22.7039027 42.9588928,22.0320984 42.9753774,21.2926626 L42.9753774,21.2926626 L42.9753774,19.4124774 C42.3215739,20.2139112 41.3600344,20.792515 40.2527785,20.792515 C39.3400374,20.792515 38.5158387,20.4216215 37.9191259,19.8241604 C37.3199967,19.2242798 36.95,18.3960222 36.95,17.4850299 C36.95,16.5691474 37.3181663,15.7420041 37.9154497,15.1439716 C38.5125295,14.546143 39.3383289,14.1775449 40.2527785,14.1775449 Z M40.2527785,14.7595808 C39.5004169,14.7595808 38.8197269,15.0645206 38.3271154,15.5577499 C37.8347078,16.050775 37.5301796,16.73201 37.5301796,17.4850299 C37.5301796,18.2312162 37.835706,18.9146788 38.3308126,19.4104064 C38.8232587,19.9034701 39.5025716,20.210479 40.2527785,20.210479 C40.9961827,20.210479 41.6776978,19.9024542 42.1728348,19.4066962 C42.6677663,18.911144 42.9753774,18.2290861 42.9753774,17.4850299 C42.9753774,16.7341661 42.6687823,16.054311 42.1765404,15.5614517 C41.6812286,15.0655187 40.9983113,14.7595808 40.2527785,14.7595808 Z M50.0138472,14.1775449 C50.9282967,14.1775449 51.7540962,14.546143 52.351176,15.1439716 C52.9484594,15.7420041 53.3166257,16.5691474 53.3166257,17.4850299 C53.3166257,18.3960222 52.9466289,19.2242798 52.3474998,19.8241604 C51.750787,20.4216215 50.9265882,20.792515 50.0138472,20.792515 C49.1059759,20.792515 48.2806772,20.4197772 47.6821251,19.8204745 C47.0833684,19.2209668 46.7110687,18.3943229 46.7110687,17.4850299 C46.7110687,16.5708589 47.0815272,15.7453177 47.6784438,15.1476525 C48.2773685,14.5479766 49.1042796,14.1775449 50.0138472,14.1775449 Z M50.0138472,14.7595808 C49.2614856,14.7595808 48.5807956,15.0645206 48.0881841,15.5577499 C47.5957765,16.050775 47.2912482,16.73201 47.2912482,17.4850299 C47.2912482,18.2312162 47.5967746,18.9146788 48.0918813,19.4104064 C48.5843274,19.9034701 49.2636403,20.210479 50.0138472,20.210479 C50.764054,20.210479 51.4433669,19.9034701 51.9358131,19.4104064 C52.4309197,18.9146788 52.7364461,18.2312162 52.7364461,17.4850299 C52.7364461,16.73201 52.4319178,16.050775 51.9395103,15.5577499 C51.4468988,15.0645206 50.7662088,14.7595808 50.0138472,14.7595808 Z M66.2246953,10.5166743 C65.7534248,10.6739615 65.3484931,10.9373229 64.9952066,11.2910525 C64.2604459,12.0267346 63.9206227,13.0658717 64.0691758,14.1775449 L62.7630417,14.7595808 L64.0353636,14.7595808 L64.6155432,20.494012 L64.6155432,14.7595808 L66.3812584,14.1775449 L64.6411684,14.1775449 C64.5307387,13.1829982 64.7757396,12.3330125 65.4050034,11.7029595 C65.71145,11.3961286 66.0549091,11.1814245 66.2246953,10.5166743 Z M72.2101328,14.1775449 C73.1245824,14.1775449 73.9503819,14.546143 74.5474617,15.1439716 C75.1447451,15.7420041 75.5129113,16.5691474 75.5129113,17.4850299 C75.5129113,18.3960222 75.1429146,19.2242798 74.5437854,19.8241604 C73.9470727,20.4216215 73.1228739,20.792515 72.2101328,20.792515 C71.3022616,20.792515 70.4769628,20.4197772 69.8784108,19.8204745 C69.2796541,19.2209668 68.9073543,18.3943229 68.9073543,17.4850299 C68.9073543,16.5708589 69.2778129,15.7453177 69.8747295,15.1476525 C70.4736542,14.5479766 71.3005652,14.1775449 72.2101328,14.1775449 Z M72.2101328,14.7595808 C71.4577712,14.7595808 70.7770812,15.0645206 70.2844698,15.5577499 C69.7920622,16.050775 69.4875339,16.73201 69.4875339,17.4850299 C69.4875339,18.2312162 69.7930603,18.9146788 70.2881669,19.4104064 C70.7806131,19.9034701 71.459926,20.210479 72.2101328,20.210479 C72.9603397,20.210479 73.6396526,19.9034701 74.1320988,19.4104064 C74.6272054,18.9146788 74.9327318,18.2312162 74.9327318,17.4850299 C74.9327318,16.73201 74.6282035,16.050775 74.1357959,15.5577499 C73.6431844,15.0645206 72.9624944,14.7595808 72.2101328,14.7595808 Z M81.9712015,14.1775449 C82.8856511,14.1775449 83.7114506,14.546143 84.3085303,15.1439716 C84.9058137,15.7420041 85.27398,16.5691474 85.27398,17.4850299 C85.27398,18.3960222 84.9039833,19.2242798 84.3048541,19.8241604 C83.7081413,20.4216215 82.8839426,20.792515 81.9712015,20.792515 C81.0633303,20.792515 80.2380315,20.4197772 79.6394794,19.8204745 C79.0407227,19.2209668 78.668423,18.3943229 78.668423,17.4850299 C78.668423,16.5708589 79.0388816,15.7453177 79.6357981,15.1476525 C80.2347229,14.5479766 81.0616339,14.1775449 81.9712015,14.1775449 Z M81.9712015,14.7595808 C81.2188399,14.7595808 80.5381499,15.0645206 80.0455384,15.5577499 C79.5531309,16.050775 79.2486026,16.73201 79.2486026,17.4850299 C79.2486026,18.2312162 79.554129,18.9146788 80.0492356,19.4104064 C80.5416817,19.9034701 81.2209947,20.210479 81.9712015,20.210479 C82.7214084,20.210479 83.4007213,19.9034701 83.8931674,19.4104064 C84.3882741,18.9146788 84.6938004,18.2312162 84.6938004,17.4850299 C84.6938004,16.73201 84.3892722,16.050775 83.8968646,15.5577499 C83.4042531,15.0645206 82.7235631,14.7595808 81.9712015,14.7595808 Z M94.5531429,10.5331932 C94.8362965,10.45 94.9120397,10.481442 94.966403,10.5347848 C95.0182089,10.5856182 95.05,10.6559414 95.05,10.7335329 L95.05,10.7335329 L95.05,17.4550898 C95.05,18.3643828 94.6777003,19.1910267 94.0789436,19.7905344 C93.4803915,20.3898371 92.6550928,20.7625749 91.7472215,20.7625749 C90.8344804,20.7625749 90.0102817,20.3916814 89.4135689,19.7942203 C88.8144397,19.1943397 88.444443,18.366082 88.444443,17.4550898 C88.444443,16.5392073 88.8126093,15.712064 89.4098927,15.1140315 C90.0069725,14.5162029 90.8327719,14.1476048 91.7472215,14.1476048 C92.8812079,14.1476048 93.8953657,14.7189147 94.4698204,15.5917432 L94.4698204,15.5917432 L94.4698204,10.7335329 C94.4698204,10.6553524 94.5018566,10.5845438 94.5531429,10.5331932 Z M91.7472215,14.7296407 C90.9948599,14.7296407 90.3141699,15.0345805 89.8215584,15.5278098 C89.3291508,16.0208349 89.0246226,16.7020699 89.0246226,17.4550898 C89.0246226,18.2012761 89.330149,18.8847387 89.8252556,19.3804663 C90.3177017,19.87353 90.9970147,20.1805389 91.7472215,20.1805389 C92.5008708,20.1805389 93.182604,19.8746287 93.6755519,19.3778154 C94.1659764,18.8835453 94.4698204,18.1999768 94.4698204,17.4401198 C94.4698204,16.6939566 94.164604,16.0150305 93.6701749,15.5232381 C93.1779058,15.0335943 92.4982751,14.7296407 91.7472215,14.7296407 Z"
              id="gofood"
              stroke="#282A2C"
              stroke-width="0.9"
              fill="#FFFFFF"
              fill-rule="nonzero"
            ></Path>
          </G>
        </G>
      </G>
    </Svg>
  );
};

export const Icon_bookmark = () => {
  return (
    <Svg
      width="41px"
      height="41px"
      viewBox="0 0 41 41"
      version="1.1"
      xmlns="http://www.w3.org/2000/Svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <G
        id="UI-/-Bookmark"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <G id="Bookmark">
          <Circle
            id="Oval-Copy-3"
            fill="#D8D8D8"
            cx="20.5"
            cy="20.5"
            r="20.5"
          ></Circle>
          <G
            id="Path-5"
            transform="translate(14.000000, 12.000000)"
            stroke="#000000"
            stroke-width="0.9"
          >
            <Path
              d="M1.8,0 L11.7,0 C12.6941125,-4.04660118e-16 13.5,0.80588745 13.5,1.8 L13.5,16.4104287 C13.5,16.9074849 13.0970563,17.3104287 12.6,17.3104287 C12.4368804,17.3104287 12.2768277,17.2660966 12.1369538,17.1821723 L7.67609236,14.5056554 C7.10606406,14.1636384 6.39393594,14.1636384 5.82390764,14.5056554 L1.36304618,17.1821723 C0.936823941,17.4379056 0.38398971,17.2996971 0.128256367,16.8734748 C0.04433205,16.733601 3.53043291e-16,16.5735482 0,16.4104287 L0,1.8 C-1.21743675e-16,0.80588745 0.80588745,-3.94290921e-17 1.8,0 Z"
              id="Path-4"
            ></Path>
          </G>
        </G>
      </G>
    </Svg>
  );
};
export const Icon_contact = () => {
  return (
    <Svg
      width="41px"
      height="41px"
      viewBox="0 0 41 41"
      version="1.1"
      xmlns="http://www.w3.org/2000/Svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <G
        id="UI-/-Contact"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <G id="Contact">
          <Circle
            id="Oval"
            fill="#D8D8D8"
            cx="20.5"
            cy="20.5"
            r="20.5"
          ></Circle>
          <G
            id="call-volume-svgrepo-com"
            transform="translate(12.000000, 12.000000)"
            fill="#000000"
            fill-rule="nonzero"
          >
            <Path
              d="M11.1051864,11.7704189 C10.9385338,11.6046691 10.7076816,11.5136208 10.4537347,11.5136208 C10.1863397,11.5136208 9.92868624,11.6177846 9.74663712,11.7998338 L8.59527504,12.951481 L8.28411408,12.7788408 C7.59968352,12.3993461 6.66173376,11.8788595 5.67160704,10.8872597 C4.67744112,9.89428176 4.1565744,8.95428864 3.77574912,8.26700688 L3.60567504,7.96454208 L4.75903296,6.81132672 C5.14052352,6.4285056 5.15382912,5.8192992 4.78783008,5.45277744 L2.65689072,3.32217072 C2.49128352,3.156516 2.26009872,3.06508752 2.00657952,3.06508752 C1.7394696,3.06508752 1.48195872,3.16977408 1.29933936,3.35201328 L0.77604912,3.87829728 L0.7275312,3.95917632 C0.53260416,4.20903648 0.37312704,4.48978464 0.2539944,4.79581344 C0.14313024,5.08730112 0.07422624,5.36434272 0.04215024,5.6422872 C-0.23246784,7.92576576 0.82029024,10.022063 3.67705008,12.8781576 C7.06270752,16.2631973 9.89195328,16.5266006 10.6785994,16.5266006 C10.8136037,16.5266006 10.8949104,16.5191875 10.9174349,16.5169066 C11.2082098,16.4815042 11.4861542,16.4116022 11.7666173,16.3031616 C12.0693672,16.185312 12.3495926,16.0269754 12.5990251,15.8320483 L12.7177301,15.7381488 L13.2076613,15.2576266 C13.5886291,14.8764686 13.6008418,14.2680701 13.2350328,13.901976 L11.1051864,11.7704189 Z"
              id="Path"
            ></Path>
            <G id="Group" transform="translate(6.225120, 0.000000)">
              <Path
                d="M2.62443456,7.82968032 C2.1607344,7.36626528 1.57832928,7.03281744 0.94189392,6.86635488 L0.6491232,6.78889728 L0.56520288,7.07796144 C0.53369712,7.18511904 0.496584,7.28657424 0.45448128,7.3777176 L0.295812,7.71572736 L0.65934,7.80962688 C1.14028992,7.93118304 1.57856688,8.17885728 1.92655584,8.52755904 C2.25914832,8.85943872 2.50226064,9.27576144 2.6295192,9.73057536 L2.69086752,9.94969008 L3.14853264,9.97568352 C3.1947696,9.9811008 3.24100656,9.98628048 3.28524768,9.99027216 L3.71554128,10.0308067 L3.61565424,9.61015968 C3.45532176,8.9335224 3.11294016,8.3179008 2.62443456,7.82968032 Z"
                id="Path"
              ></Path>
              <Path
                d="M4.11988896,6.33356064 C3.25901664,5.47254576 2.1588336,4.9107168 0.93985056,4.709232 L0.5158296,4.63799952 L0.58245264,5.06187792 C0.60203088,5.18756832 0.61928064,5.31268848 0.6336792,5.43909168 L0.6607656,5.66210304 L0.88520256,5.70648672 C1.85679648,5.88596976 2.73396816,6.34468032 3.4216776,7.03196208 C4.2112224,7.821792 4.693788,8.82935856 4.81586688,9.9473616 L4.84186032,10.1839637 L5.20054128,10.2356179 C5.25818304,10.2401798 5.31668016,10.2396096 5.39917488,10.2401798 L5.8311792,10.2550061 L5.79691728,9.90231264 C5.6624832,8.5300776 5.08207392,7.29636336 4.11988896,6.33356064 Z"
                id="Path"
              ></Path>
              <Path
                d="M5.74440768,4.70927952 C4.3319232,3.29708016 2.45051136,2.45588112 0.44664048,2.3413104 L0.05740416,2.31702768 L0.12231648,2.70037152 C0.14213232,2.82520656 0.16641504,2.9528928 0.19207584,3.08590128 L0.23945328,3.31846416 L0.4747248,3.33300528 C2.20393008,3.45142512 3.82745088,4.18808016 5.04671904,5.4070632 C6.24631392,6.60680064 6.97940496,8.21188368 7.1106552,9.92450448 L7.1332272,10.2292502 L7.43768784,10.2112877 C7.50987072,10.2075811 7.58091312,10.2013085 7.68479184,10.1921846 L8.12050272,10.1579227 L8.09650512,9.84918528 C7.94757744,7.90243344 7.11236592,6.07704768 5.74440768,4.70927952 Z"
                id="Path"
              ></Path>
              <Path
                d="M10.392719,9.6306408 C10.1935627,7.1593632 9.12037104,4.83382944 7.37030448,3.08347776 C5.50300608,1.2160368 3.01732992,0.1332936 0.373032,0.03383424 L0.07327584,0.02124144 L0.05046624,0.32256576 C0.04519152,0.40672368 0.04162752,0.4899312 0.0384912,0.57351888 L0.02010096,1.010988 L0.3309768,1.02210768 C2.72888352,1.11087504 4.98085632,2.09116512 6.67185552,3.78216432 C8.25583968,5.36614848 9.22771872,7.4722824 9.4091976,9.7116624 L9.43457328,10.0261022 L9.75100896,9.99530928 C9.85830912,9.98390448 9.96703488,9.975636 10.076616,9.9670824 L10.4179046,9.94080384 L10.392719,9.6306408 Z"
                id="Path"
              ></Path>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
};
export const Icon_map = () => {
  return (
    <Svg
      width="41px"
      height="41px"
      viewBox="0 0 41 41"
      version="1.1"
      xmlns="http://www.w3.org/2000/Svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <Defs>
        <Path
          d="M7.22921875,19.5964796 C1.55351562,11.3683957 0.5,10.5239427 0.5,7.5 C0.5,3.35785074 3.85785156,0 8,0 C12.1421484,0 15.5,3.35785074 15.5,7.5 C15.5,10.5239427 14.4464844,11.3683957 8.77078125,19.5964796 C8.39832031,20.1345263 7.60164062,20.1344873 7.22921875,19.5964796 Z M8,10.6249974 C9.72589844,10.6249974 11.125,9.22589619 11.125,7.49999817 C11.125,5.77410015 9.72589844,4.37499893 8,4.37499893 C6.27410156,4.37499893 4.875,5.77410015 4.875,7.49999817 C4.875,9.22589619 6.27410156,10.6249974 8,10.6249974 Z"
          id="Path-1"
        ></Path>
      </Defs>
      <G
        id="UI-/-Map"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <G id="Map">
          <Circle
            id="Oval-Copy-2"
            fill="#D8D8D8"
            cx="20.5"
            cy="20.5"
            r="20.5"
          ></Circle>
          <G
            id="Icons/Solid/map-marker-alt"
            transform="translate(13.000000, 11.000000)"
          >
            <Mask id="Mask-2" fill="white">
              <Use xlinkHref="#Path-1"></Use>
            </Mask>
            <Use
              id="map-marker-alt"
              fill="#000000"
              fill-rule="nonzero"
              xlinkHref="#Path-1"
            ></Use>
          </G>
        </G>
      </G>
    </Svg>
  );
};
export const Icon_web = () => {
  return (
    <Svg
      width="41px"
      height="41px"
      viewBox="0 0 41 41"
      version="1.1"
      xmlns="http://www.w3.org/2000/Svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <Defs>
        <Path
          d="M15.4654794,0.228071729 L0.842849139,8.66173158 C-0.366329901,9.36131404 -0.250333074,11.1506983 1.04320729,11.6815373 L5.06091556,13.3443639 L5.06091556,16.3114372 C5.06091556,17.9426245 7.14182832,18.614083 8.10495349,17.3168673 L9.64454773,15.2392129 L13.5778947,16.8633691 C13.7852829,16.9477409 14.0032164,16.9899267 14.2211498,16.9899267 C14.5093843,16.9899267 14.7941038,16.9161015 15.0507029,16.7719664 C15.5006299,16.5188511 15.8099548,16.0688684 15.8908011,15.5591224 L17.978744,1.9471462 C18.1931623,0.537434825 16.6816885,-0.471510727 15.4654794,0.228071729 Z M6.74814212,16.3114372 L6.74814212,14.0404309 L8.03465238,14.5712698 L6.74814212,16.3114372 Z M14.2211498,15.3024917 L8.81499467,13.0701557 L13.7431023,5.95831998 C14.1192132,5.41341907 13.409172,4.78063092 12.9100342,5.21303616 L5.47569209,11.6920837 L1.68646242,10.1241753 L16.3090927,1.68699996 L14.2211498,15.3024917 Z"
          id="Path-1"
        ></Path>
      </Defs>
      <G
        id="UI-/-Web"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <G id="Web">
          <Circle
            id="Oval-Copy"
            fill="#D8D8D8"
            cx="20.5"
            cy="20.5"
            r="20.5"
          ></Circle>
          <G
            id="Icons/Regular/paper-plane"
            transform="translate(12.000000, 12.000000)"
          >
            <Mask id="Mask-2" fill="white">
              <Use xlinkHref="#Path-1"></Use>
            </Mask>
            <Use
              id="paper-plane"
              fill="#000000"
              fill-rule="nonzero"
              xlinkHref="#Path-1"
            ></Use>
          </G>
        </G>
      </G>
    </Svg>
  );
};

export const Icon_Claim = () => {
  return (
    <Svg
      width="70px"
      height="23px"
      viewBox="0 0 70 23"
      version="1.1"
      xmlns="http://www.w3.org/2000/Svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <G
        id="Symbols"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <G id="UI-/-Badge-1">
          <G id="Badge">
            <Rect
              id="Rectangle"
              fill="#39B54A"
              x="0"
              y="0"
              width="69.12"
              height="22.275"
              rx="11.1375"
            ></Rect>
            <Text
              id="Claimed"
              fill="#44566C"
              fontFamily="OpenSans-SemiBold, Open Sans"
              font-size="9.36"
              font-weight="500"
              line-spacing="17.28"
            >
              <Text x="16.5427734" y="10">
                Claimed
              </Text>
            </Text>
          </G>
        </G>
      </G>
    </Svg>
  );
};

export const Icon_Unclaim = () => {
  return (
    <Svg
      width="70px"
      height="23px"
      viewBox="0 0 70 23"
      version="1.1"
      xmlns="http://www.w3.org/2000/Svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <G
        id="Symbols"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <G id="UI-/-Badge-2">
          <G id="Badge-Copy">
            <Rect
              id="Rectangle"
              fill="#B0BBC7"
              x="0"
              y="0"
              width="69.12"
              height="22.32"
              rx="11.16"
            ></Rect>
            <Text
              id="Unclaimed"
              fill="#44566C"
              font-family="OpenSans-SemiBold, Open Sans"
              font-size="9.36"
              font-weight="500"
              line-spacing="17.28"
            >
              <Text x="10.7476172" y="10">
                Unclaimed
              </Text>
            </Text>
          </G>
        </G>
      </G>
    </Svg>
  );
};
