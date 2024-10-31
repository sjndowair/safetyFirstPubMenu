import {
  Beer,
  Coffee,
  Utensils,
  ChevronDown,
  Crown,
  Martini,
  ChevronUp,
  Salad,
  Apple,
  Torus,
  DrumstickIcon,
  Beef,
  Fish,
  CookingPot,
} from "lucide-react";
interface MenuSection {
  title: string;
  icon: React.ReactNode;
  items: MenuItem[];
}
interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export const menuData: MenuSection[] = [
  {
    title: "신메뉴",
    icon: <Crown className="w-6 h-6 text-yellow-300" />,
    items: [
      {
        name: "술국",
        description: "술이 들어간다 술~ 술술술~",
        price: "15,900",
      },
      {
        name: "육개장",
        description: "이건 플레이팅한다고 이것저것 넣으면 맛없다(근본 육개장)",
        price: "13,900",
      },
      {
        name: "부대찌개",
        description: " 싸우지마 기본으로 가자",
        price: "13,900",
      },
      {
        name: "모둠소세지",
        description: "우리아이 술안주, 우리 남편 영양간식.... 라고 할뻔~",
        price: "13,900",
      },
      {
        name: "고추장불고기",
        description:
          "장트리오랑 고기를 싫어할수 있음? (고기 재워둔거 깨우러 감)",
        price: "14,900",
      },
      {
        name: "부추전",
        description:
          "우리주방실장 전집에서 전부치다가 왔다 (주문즉시 반죽하는거라 시간좀 걸림)",
        price: "12,000",
      },
      {
        name: "김치우동",
        description: "먹다보니 해장하려다가 해장술이 되어버렸네..?",
        price: "11,900",
      },
    ],
  },
  {
    title: "보일링 메뉴",
    icon: <Utensils className="w-6 h-6" />,
    items: [
      {
        name: "보일링 크랩",
        description:
          "랍스타, 게, 새우 등의 갑각류를 옥수수, 감자 등과 소스에 버무려서 쪄내는 케이준요리. 미국식 해물찜, 케이준 요리의 특성상 매콤 짭짭한 양념이 잔뜩 들어가 자극적인 맛을 내기 때문에 매운 해물찜을 즐기는 한국인의 입맛에도 맞는편이다.(주문즉시 조리시작으로 인해 30분간 소요됩니다, 다만 기다릴만한 맛임)",
        price: "69,900",
      },
      {
        name: "홍게 보일링 새우",
        description:
          " 게, 새우 등의 갑각류를 옥수수, 감자 등과 소스에 버무려서 쪄내는 케이준요리. 미국식 해물찜, 케이준 요리의 특성상 매콤 짭짭한 양념이 잔뜩 들어가 자극적인 맛을 내기 때문에 매운 해물찜을 즐기는 한국인의 입맛에도 맞는편이다.(주문즉시 조리시작으로 인해 30분간 소요됩니다, 다만 기다릴만한 맛임)",
        price: "49,900",
      },
      {
        name: "보일링 새우",
        description:
          "새우, 꽃게, 조개 등의 갑각류를 옥수수, 감자 등과 소스에 버무려서 쪄내는 케이준요리. 미국식 해물찜, 케이준 요리의 특성상 매콤 짭짭한 양념이 잔뜩 들어가 자극적인 맛을 내기 때문에 매운 해물찜을 즐기는 한국인의 입맛에도 맞는편이다.(주문즉시 조리시작으로 인해 30분간 소요됩니다, 다만 기다릴만한 맛임)",
        price: "29,900",
      },
    ],
  },
  {
    title: "탕/찜 메뉴",
    icon: <CookingPot className="w-6 h-6" />,
    items: [
      {
        name: "바지락 조개 술찜",
        description:
          "이거만 6개월 머리싸매서 만듬 술로 만드는거라 주인장 취한다........ 스파게티 사리추가하면 다른거 못먹음",
        price: "18,900",
      },
      {
        name: "돈가스김치나베",
        description:
          "우선 다른곳처럼 조그마한 돈가스 줄빠엔 안준다(매니저 면상만함)",
        price: "18,900",
      },
      {
        name: "순두부계란탕",
        description:
          "맵찔이면 이거 시켜라 이거아님 너 먹을거 없다.(주인장은 매운거 ㅈㄴ좋아함)",
        price: "15,900",
      },
      {
        name: "차돌된장찌개",
        description: "주변고깃집보다 맛없으면 뺨때려도된다(대신 홀매니저가ㅎ)",
        price: "14,900",
      },
      {
        name: "육개장",
        description: "이건 플레이팅 한다고 이것저것 넣으면 맛없다. 근본 육개장",
        price: "13,900",
      },
      {
        name: "부대찌개",
        description: "싸우지마 근본으로 가자",
        price: "13,900",
      },
      {
        name: "술국",
        description: "술이 들어간다 술~ 술술술~",
        price: "15,900",
      },
    ],
  },
  {
    title: "해산물 메뉴",
    icon: <Fish className="w-6 h-6" />,
    items: [
      {
        name: "전복관자버터구이",
        description:
          "주인장이 전복이랑 맞짱까야해서 오래걸린다(이기고 돌아올게)",
        price: "24,900",
      },
      {
        name: "딱새우회",
        description:
          "제주도에서 오는거마냥 맞짱떠야해서 오래걸릴수있음(손질 ㅗㅜㅑ..)",
        price: "23,900",
      },
      {
        name: "새우버터구이",
        description:
          "피씨방에 라면이있다가 여기엔 새우버터구이가있다(파도효과 냄새주의)",
        price: "22,900",
      },
    ],
  },
  {
    title: "마라/볶음 메뉴",
    icon: <Beef className="w-6 h-6" />,
    items: [
      {
        name: "마라새우",
        description:
          "룬샤 언제 까먹냐 새우가 대신 마라에 빠져줬다! 까먹어라(여자들아 손다치지말고 남자한테 까라 시켜라 없으면 미안...)",
        price: "23,900",
      },
      {
        name: "마라차돌숙주",
        description:
          "한중일의 합작 마라 못먹음 시키지말고 시키면 아쉬운거지 뭐~",
        price: "16,900",
      },
      {
        name: "마라마파두부",
        description:
          "우리 매니저는 이걸 1일 3회를 처먹더라...(월급에서 까던가 해야지)",
        price: "15,900",
      },
      {
        name: "국물뼈닭발",
        description:
          "원래는 ㅎㅅ닭발을 하고 싶었다는.... 나는 이이야기를 무척 좋아한다.",
        price: "18,900",
      },
      {
        name: "차돌숙주볶음",
        description: "차돌이랑 숙주를 싫어할수가 있나...?",
        price: "15,900",
      },
      {
        name: "김치제육",
        description: "매니저가 먹고싶다 지랄해서 넣어준 메뉴",
        price: "15,900",
      },
      {
        name: "껍데기",
        description:
          "맵다.. 맵다고했다... 진짜맵다고했다... 갑자기 매운냄새로 재체기하면 주인장이 만드는거다",
        price: "12,900",
      },
      {
        name: "고추장불고기",
        description: "장트리오랑 고기를 싫어할수 있음?(고기 재워둔거 깨우러감)",
        price: "14,900",
      },
      {
        name: "모둠소세지",
        description: "우리아이 술안주, 우리남편 영양간식.... 라고 할뻔~",
        price: "13,900",
      },
    ],
  },

  {
    title: "튀김/마른안주 메뉴",
    icon: <DrumstickIcon className="w-6 h-6" />,
    items: [
      {
        name: "안전제일 튀김플래터",
        description: "너가 뭘 좋아할지 몰라서 6가지이상 다넣어봤어",
        price: "21,900",
      },
      {
        name: "옛날통닭",
        description:
          "그시절 아버지가 사오던 통닭 + 양배추사라다(얘 허벅지 끝내주더라)",
        price: "13900",
      },

      {
        name: "먹태",
        description: "1주일의 한번씩 먹태랑 맞짱뜸 (내 손꾸락 지켜....)",
        price: "13900",
      },
    ],
  },
  {
    title: "전 메뉴",
    icon: <Torus className="w-6 h-6" />,
    items: [
      {
        name: "부추전",
        description:
          "우리주방실장 전집에서 전부치다가 왔다(주문즉시 반죽하는거라 시간좀 걸림)",
        price: "12,000",
      },
    ],
  },
  {
    title: "과일/샤베트",
    icon: <Apple className="w-6 h-6" />,
    items: [
      {
        name: "안전제일 과일 플래터",
        description: "주인장이 과일의 예민해요 이거 때문에 매일 장보러감",
        price: "24,900",
      },
      {
        name: "설탕토마토",
        description:
          "기념일인데 꽃준비못한 남자들은 몰래 이거 시켜줘라 내가 대신 꽃 만들어 줌",
        price: "12,900",
      },
      {
        name: "파인애플샤베트",
        description: "이제 이 샤베트는 모르면 북에서 내려왔나....?",
        price: "8,900",
      },
      {
        name: "더위사냥샤베트",
        description: "더위사냥샤베트 먹어봄? 함 무봐라",
        price: "8,900",
      },
    ],
  },
  {
    title: "사이드 메뉴",
    icon: <Salad className="w-6 h-6" />,
    items: [
      {
        name: "김치제육덮밥",
        description: "따로먹기 아까우니까 쓰까주께",
        price: "9,900",
      },
      {
        name: "셀프주먹밥",
        description: "너가만들래? 내가만들어줄까? 내가 만들면 3천원추가얌~",
        price: "3,000",
      },
      {
        name: "공기밥",
        description: "공기빼고 밥만있음 ",
        price: "1,000",
      },
      {
        name: "번데기탕",
        description: "주인장 이거에 소주 4병 마심(믿거나 말거나)",
        price: "7,900",
      },
      {
        name: "벌스데이브래드",
        description:
          "햅삐빠스데이~ 생일이면 시켜봐!(혹시 알아 주인장 기분좋으면 공짜일지도?)",
        price: "9,900",
      },
      {
        name: "아이스크림튀김",
        description: "안먹어봤어? 먹어보면 빠져들걸?",
        price: "6,900",
      },
    ],
  },
  {
    title: "주류/양주",
    icon: <Beer className="w-6 h-6" />,
    items: [
      {
        name: "소주",
        description: "참이슬, 새로, 처음처럼, 진로, 새로살",
        price: "5,000",
      },
      {
        name: "과일소주",
        description: "좋은데이 블루베리, 좋은데이 석류, 좋은데이 파인애플",
        price: "6,000",
      },
      {
        name: "생맥주",
        description: "500cc",
        price: "5,000",
      },
      {
        name: "청하",
        description: "청하 오리지널, 별빛청하, 별빛청하 로제",
        price: "6,000",
      },
      {
        name: "복분자",
        description: "남자들아 먹어봐라 느낌이다르다",
        price: "15,000",
      },
      {
        name: "막걸리",
        description: "지평막걸리",
        price: "5,000",
      },
      {
        name: "엑스레이티드",
        description: "어떤 이쁘고 잘생긴 분이 가져갈려나~",
        price: "99,000",
      },
      {
        name: "짐빔",
        description: "달달한 양주보단 위스키같은 양주가 땡길때 먹어봐~",
        price: "59,000",
      },
      {
        name: "피치트리",
        description: "양주 입문용으로 추천해줄게",
        price: "59,000",
      },
      {
        name: "말리부",
        description:
          "양주 입문용으로 추천해줄게222 (오랜지 쥬스랑 마시면 기깔납니다)",
        price: "59,000",
      },
    ],
  },
  {
    title: "하이볼/음료",
    icon: <Martini className="w-6 h-6" />,
    items: [
      {
        name: "하이볼",
        description: "짐빔하이볼, 레몬하이볼",
        price: "7,000",
      },
      {
        name: "피치트리 칵테일",
        description: "복숭아 향이 나는 달달한 칵테일",
        price: "7,000",
      },
      {
        name: "엑스레이티드 칵테일",
        description: "비싼만큼 맛은 보장한다!",
        price: "9,000",
      },
      {
        name: "말리부 칵테일",
        description: "우유? 오렌지주스? 원하는걸로 타줄게",
        price: "7,000",
      },
      {
        name: "음료",
        description:
          "코카콜라, 사이다, 환타(파인애플), 웰치스, 포도봉봉, 갈아만든배, 펩시제로, 포카리스웨트 ",
        price: "2,500",
      },
      {
        name: "아이스티, 아메리카노",
        description: "500ml",
        price: "1,000",
      },
    ],
  },
];
