# Agentimate - 아이디어를 애니메이션으로

![Agentimate 로고](/documentation/assets/img/animejs-v3-header-animation.gif)

## 프로젝트 소개

Agentimate는 사용자의 아이디어를 애니메이션으로 변환해주는 강력한 AI 기반 디자인 도구입니다. 이 웹사이트는 [anime.js](https://animejs.com)를 사용하여 부드럽고 인터랙티브한 UI 애니메이션을 구현하고 있습니다.

### 주요 기능

- **AI 기반 디자인 변환**: 텍스트 프롬프트를 입력하면 디자인과 애니메이션으로 변환
- **다양한 디자인 카테고리**: 웹사이트 디자인, 로고 디자인, UI/UX 디자인, 애니메이션 지원
- **인터랙티브 UI**: 부드러운 타이핑 효과와 애니메이션 요소로 구성된 현대적인 인터페이스
- **반응형 디자인**: 모든 디바이스에서 최적의 사용자 경험 제공

## 기술 스택

- **Front-end**: HTML5, CSS3, JavaScript
- **애니메이션 라이브러리**: anime.js
- **타이핑 효과**: 커스텀 TypingEffect 클래스
- **애니메이션 요소**: 도형 기반 AnimatedIcons 클래스

## 페이지 구성

### 1. 홈페이지 (index.html)
- 메인 히어로 섹션
- 인터랙티브 채팅창 (타이핑 애니메이션 포함)
- 옵션 카테고리
- 사용자 통계
- 푸터 섹션

### 2. 지원 페이지 (support.html)
- 고객 지원 정보
- FAQ 섹션
- 연락처 정보

### 3. 출시 내역 (launched.html)
- 최신 출시 제품 및 기능
- 출시 일정
- 업데이트 정보

### 4. 학습 페이지 (learn.html)
- 튜토리얼 및 가이드
- 교육 자료
- 사용 방법 설명

## 애니메이션 특징

### 타이핑 효과
웹사이트는 채팅창에 자연스러운 타이핑 효과를 구현하여 사용자 경험을 향상시킵니다. `typing-effect.js` 파일에 구현된 TypingEffect 클래스는 다음 기능을 제공합니다:

- 자연스러운 타이핑 및 삭제 애니메이션
- 여러 예제 텍스트 간 자동 전환
- 텍스트 입력 시 애니메이션 자동 중지

### 애니메이션 아이콘
채팅창 내부에는 `AnimatedIcons` 클래스를 통해 구현된 부드럽게 움직이는 도형들이 있습니다:

- 다양한 형태의 도형 (원, 사각형, 삼각형, 다이아몬드, 별)
- 부드러운 움직임과 회전 효과
- 반투명한 색상과 블러 효과로 현대적인 느낌

### 기타 애니메이션 효과
- SVG 로고 애니메이션
- 웨이브 애니메이션
- 스태거 그리드 애니메이션
- 요소 나타나기/사라지기 효과

## 설치 및 사용 방법

1. 레포지토리 클론
```bash
git clone https://github.com/yourusername/agentimate.git
```

2. 로컬 서버 실행
```bash
# Python을 사용하는 경우
python -m http.server 8080

# Node.js를 사용하는 경우
npx serve
```

3. 브라우저에서 http://localhost:8080 접속

## 커스터마이징

### 타이핑 효과 수정
`typing-effect.js` 파일에서 다음 매개변수를 조정할 수 있습니다:
- `placeholderText`: 기본 플레이스홀더 텍스트
- `typingDelay`: 타이핑 속도
- `deletingDelay`: 삭제 속도
- `pauseDelay`: 완성 후 정지 시간
- `exampleTexts`: 예시 텍스트 배열

### 애니메이션 아이콘 수정
`AnimatedIcons` 클래스에서 다음을 조정할 수 있습니다:
- 아이콘 개수
- 아이콘 형태 및 색상
- 움직임 속도 및 패턴

## 라이센스

MIT 라이센스로 배포됩니다. 자세한 내용은 [LICENSE.md](LICENSE.md) 파일을 참조하세요.

---

# anime.js

> [!IMPORTANT]
> ## 🎉 Anime.js V4 is now available in early access 🎉
>
> After years in the making, Anime.js V4 is finally available in early access for my **[GitHub Sponsors](https://github.com/sponsors/juliangarnier)**!

<h1 align="center">
  <a href="https://animejs.com"><img src="/documentation/assets/img/animejs-v3-header-animation.gif" width="250"/></a>
  <br>
  anime.js
</h1>

<h4 align="center">JavaScript animation engine | <a href="https://animejs.com" target="_blank">animejs.com</a></h4>

<p align="center">
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/animejs?style=flat-square&logo=npm">
  <img alt="jsDelivr hits (npm)" src="https://img.shields.io/jsdelivr/npm/hm/animejs?style=flat-square&logo=jsdeliver">
  <img alt="GitHub Sponsors" src="https://img.shields.io/github/sponsors/juliangarnier?style=flat-square&logo=github">
</p>

<blockquote align="center">
  <em>Anime.js</em> (<code>/ˈæn.ə.meɪ/</code>) is a lightweight JavaScript animation library with a simple, yet powerful API.<br>
  It works with CSS properties, SVG, DOM attributes and JavaScript Objects.
</blockquote>

<p align="center">
  <a href="#getting-started">Getting started</a>&nbsp;|&nbsp;<a href="#documentation">Documentation</a>&nbsp;|&nbsp;<a href="#demos-and-examples">Demos and examples</a>&nbsp;|&nbsp;<a href="#browser-support">Browser support</a>
</p>

## Powered by

<table>
  <tr>
    <td>
      <a target="_blank" href="https://huly.io?ref=animejs">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="./documentation/assets/sponsors/huly-logomark.svg">
          <img align="center" src="./documentation/assets/sponsors/huly-logomark-dark.svg" width="128">
        </picture>
      </a>
    </td>
    <td>
      <a target="_blank" href="https://clutch.io?ref=animejs">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="./documentation/assets/sponsors/clutch-logomark.svg">
          <img align="center" src="./documentation/assets/sponsors/clutch-logomark-dark.svg" width="128">
        </picture>
      </a>
    </td>
    <td>
      <a target="_blank" href="https://github.com/sponsors/juliangarnier">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="./documentation/assets/sponsors/placeholder.svg">
          <img align="center" src="./documentation/assets/sponsors/placeholder-dark.svg" width="128">
        </picture>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a target="_blank" href="https://huly.io?ref=animejs">Huly</a>
    </td>
    <td align="center">
      <a target="_blank" href="https://clutch.io?ref=animejs">Clutch</a>
    </td>
    <td align="center">
      <a target="_blank" href="https://github.com/sponsors/juliangarnier">Your logo here</a>
    </td>
  </tr>
</table>

## Getting started

### Download

Via npm

```bash
$ npm install animejs --save
```

or manual [download](https://github.com/juliangarnier/anime/archive/master.zip).

### Usage

#### ES6 modules

```javascript
import anime from 'animejs/lib/anime.es.js';
```

#### CommonJS

```javascript
const anime = require('animejs');
```

#### File include

Link `anime.min.js` in your HTML :

```html
<script src="anime.min.js"></script>
```

### Hello world

```javascript
anime({
  targets: 'div',
  translateX: 250,
  rotate: '1turn',
  backgroundColor: '#FFF',
  duration: 800
});
```

## [Documentation](https://animejs.com/documentation/)

* [Targets](https://animejs.com/documentation/#cssSelector)
* [Properties](https://animejs.com/documentation/#cssProperties)
* [Property parameters](https://animejs.com/documentation/#duration)
* [Animation parameters](https://animejs.com/documentation/#direction)
* [Values](https://animejs.com/documentation/#unitlessValue)
* [Keyframes](https://animejs.com/documentation/#animationKeyframes)
* [Staggering](https://animejs.com/documentation/#staggeringBasics)
* [Timeline](https://animejs.com/documentation/#timelineBasics)
* [Controls](https://animejs.com/documentation/#playPause)
* [Callbacks and promises](https://animejs.com/documentation/#update)
* [SVG Animations](https://animejs.com/documentation/#motionPath)
* [Easing functions](https://animejs.com/documentation/#linearEasing)
* [Helpers](https://animejs.com/documentation/#remove)

## [Demos and examples](http://codepen.io/collection/b392d3a52d6abf5b8d9fda4e4cab61ab/)

* [CodePen demos and examples](http://codepen.io/collection/b392d3a52d6abf5b8d9fda4e4cab61ab/)
* [juliangarnier.com](http://juliangarnier.com)
* [animejs.com](https://animejs.com)
* [Moving letters](http://tobiasahlin.com/moving-letters/) by [@tobiasahlin](https://twitter.com/tobiasahlin)
* [Gradient topography animation](https://tympanus.net/Development/GradientTopographyAnimation/) by [@crnacura](https://twitter.com/crnacura)
* [Organic shape animations](https://tympanus.net/Development/OrganicShapeAnimations/) by [@crnacura](https://twitter.com/crnacura)
* [Pieces slider](https://tympanus.net/Tutorials/PiecesSlider/) by [@lmgonzalves](https://twitter.com/lmgonzalves)
* [Staggering animations](https://codepen.io/juliangarnier/pen/4fe31bbe8579a256e828cd4d48c86182?editors=0100)
* [Easings animations](https://codepen.io/juliangarnier/pen/444ed909fd5de38e3a77cc6e95fc1884)
* [Sphere animation](https://codepen.io/juliangarnier/pen/b3bb8ca599ad0f9d00dd044e56cbdea5?editors=0010)
* [Layered animations](https://codepen.io/juliangarnier/pen/6ca836535cbea42157d1b8d56d00be84?editors=0010)
* [anime.js logo animation](https://codepen.io/juliangarnier/pen/d43e8ec355c30871cbe775193255d6f6?editors=0010)


## Browser support

| Chrome | Safari | IE / Edge | Firefox | Opera |
| --- | --- | --- | --- | --- |
| 24+ | 8+ | 11+ | 32+ | 15+ |

## <a href="https://animejs.com"><img src="/documentation/assets/img/animejs-v3-logo-animation.gif" width="150" alt="anime-js-v3-logo"/></a>

[Website](https://animejs.com/) | [Documentation](https://animejs.com/documentation/) | [Demos and examples](http://codepen.io/collection/b392d3a52d6abf5b8d9fda4e4cab61ab/) | [MIT License](LICENSE.md) | © 2019 [Julian Garnier](http://juliangarnier.com).
