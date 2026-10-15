# time-to-grow

## 어른이 될 시간

**완벽해지려던 우리의 이야기**

2026 연극 프기연 《어른이 될 시간》을 소개하는 반응형 단일 페이지 웹사이트입니다. 작품 소개, 등장인물, 장면 구성과 공연 정보를 제공합니다.

## 주요 기능

- 작품을 소개하는 히어로 영역과 줄거리
- 12명의 등장인물 카드
  - 데스크톱: 스크롤 위치에 따라 강조 카드와 소개 패널 전환
  - 모바일: 가로 스크롤 카드와 현재 카드 진행 표시
- 작품의 흐름을 담은 12개 장면
- 모바일 내비게이션 메뉴와 현재 섹션 표시
- 스크롤 기반 콘텐츠 등장 및 장식 요소 시차 효과
- `prefers-reduced-motion` 설정을 고려한 모션 최소화
- 작은 화면과 모바일 안전 영역을 고려한 반응형 레이아웃

## 기술 구성

- HTML
- CSS
- Vanilla JavaScript

빌드 도구나 패키지 설치가 필요 없는 정적 웹사이트입니다. 글꼴은 프로젝트에 포함된 파일을 사용하며, 외부 웹폰트 연결은 없습니다. 등장인물 카드와 장면 목록은 JavaScript로 생성하므로 인터랙션을 확인하려면 JavaScript가 활성화되어 있어야 합니다.

## 프로젝트 구조

```text
adult-time/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── fonts/
│   │   ├── GmarketSans-Bold.ttf
│   │   ├── Pretendard-Regular.woff
│   │   ├── ShillaCulture-Bold.ttf
│   │   └── ShillaCulture-Medium.ttf
│   ├── img/
│   │   ├── bg/
│   │   │   ├── bg-sky.webp
│   │   │   ├── bg-canopy.webp
│   │   │   ├── bg-hills.webp
│   │   │   ├── bg-field.webp
│   │   │   └── grain.webp
│   │   ├── favicon.svg
│   │   └── og-image.png
│   └── js/
│       └── main.js
└── README.md
```

## 실행 방법

`index.html`을 브라우저에서 직접 열거나, 프로젝트 루트에서 로컬 웹 서버를 실행합니다.

```bash
python -m http.server 8000
```

브라우저에서 `http://localhost:8000`에 접속합니다.

## 콘텐츠 수정

- 작품 소개, 페이지 메타 정보, 내비게이션, 공연 정보와 페이지 구조: `index.html`
- 등장인물 및 장면 데이터, 카드 동작, 메뉴와 스크롤 인터랙션: `assets/js/main.js`
- 레이아웃, 반응형 규칙, 색상, 글꼴과 애니메이션: `assets/css/style.css`
