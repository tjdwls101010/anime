// 타이핑 효과 관련 JS
class TypingEffect {
  constructor(element, options = {}) {
    this.element = element;
    // 커서 제거
    
    this.placeholderText = options.placeholderText || '무엇이든 질문하기...';
    this.typingDelay = options.typingDelay || 150;    // 타이핑 속도 느리게
    this.deletingDelay = options.deletingDelay || 80; // 삭제 속도도 느리게
    this.pauseDelay = options.pauseDelay || 3000;     // 완성 후 유지 시간 길게
    
    this.exampleTexts = options.exampleTexts || [
      '로고 디자인을 만들어줘',
      '웹사이트 디자인 레이아웃 아이디어가 필요해',
      '애니메이션이 있는 소셜 미디어 포스트 디자인 해줘'
    ];
    
    this.isDeleting = false;
    this.currentTextIndex = 0;
    this.currentText = '';
    this.loopNum = 0;
    this.isAnimating = false; // 애니메이션 진행 상태 추적
    
    this.init();
  }
  
  init() {
    // 요소에 플레이스홀더 추가
    this.element.setAttribute('placeholder', this.currentText || this.exampleTexts[0].substring(0, 1));
    
    // 요소 포커스 이벤트
    this.element.addEventListener('focus', () => {
      this.stopTyping();
    });
    
    this.element.addEventListener('blur', () => {
      if (this.element.value.length === 0) {
        this.startTyping();
      }
    });
    
    // 타이핑 애니메이션 시작
    this.startTyping();
  }
  
  startTyping() {
    if (this.isAnimating) return; // 이미 애니메이션 중이면 무시
    this.isAnimating = true;
    
    // 현재 입력 중인 텍스트
    const fullText = this.exampleTexts[this.currentTextIndex];
    
    // 타이핑 또는 삭제 중에 따라 텍스트 처리
    let updatedText = this.isDeleting
      ? fullText.substring(0, this.currentText.length - 1)
      : fullText.substring(0, this.currentText.length + 1);
    
    this.currentText = updatedText;
    
    // 플레이스홀더 텍스트 업데이트 (안정성을 위해 직접 할당)
    this.element.placeholder = this.currentText;
    
    // 타이핑 지연 시간 계산
    let typeSpeed = this.isDeleting ? this.deletingDelay : this.typingDelay;
    
    // 타이핑 완료 확인
    if (!this.isDeleting && this.currentText === fullText) {
      // 텍스트 완료 후 일시 정지 - 충분히 긴 시간
      typeSpeed = this.pauseDelay;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === '') {
      this.isDeleting = false;
      // 다음 문장으로 즉시 전환 (지연 없음)
      this.currentTextIndex = (this.currentTextIndex + 1) % this.exampleTexts.length;
    }
    
    // 다음 글자 타이핑
    this.timeout = setTimeout(() => {
      this.isAnimating = false; // 애니메이션 완료 표시
      this.startTyping();
    }, typeSpeed);
  }
  
  stopTyping() {
    clearTimeout(this.timeout);
    this.isAnimating = false;
    this.element.placeholder = this.placeholderText;
  }
}

// 애니메이션 아이콘 요소 생성 및 관리
class AnimatedIcons {
  constructor(container) {
    this.container = container;
    this.icons = [
      { type: 'circle', color: 'rgba(30, 178, 216, 0.4)' },
      { type: 'square', color: 'rgba(218, 90, 152, 0.4)' },
      { type: 'triangle', color: 'rgba(157, 202, 64, 0.4)' },
      { type: 'diamond', color: 'rgba(245, 199, 57, 0.4)' },
      { type: 'star', color: 'rgba(230, 99, 42, 0.4)' }
    ];
    
    this.init();
  }
  
  init() {
    this.createIcons();
    this.animateIcons();
  }
  
  createIcons() {
    this.container.innerHTML = '';
    
    // 도형 개수를 15개에서 6개로 줄임
    for (let i = 0; i < 6; i++) {
      const icon = this.icons[Math.floor(Math.random() * this.icons.length)];
      const element = document.createElement('div');
      element.className = `animated-icon ${icon.type}`;
      element.style.setProperty('--icon-color', icon.color);
      
      // 랜덤 위치 설정 - 채팅창 내부에 고르게 분포
      element.style.left = `${10 + Math.random() * 80}%`;
      element.style.top = `${10 + Math.random() * 80}%`;
      
      // 랜덤 크기 설정 (더 작게)
      const size = 15 + Math.random() * 20;
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      
      this.container.appendChild(element);
    }
  }
  
  animateIcons() {
    const icons = this.container.querySelectorAll('.animated-icon');
    
    icons.forEach(icon => {
      // 기본 애니메이션 경로 - 부드럽게 떠다니도록
      const moveX = anime.random(-30, 30);
      const moveY = anime.random(-20, 20);
      const duration = anime.random(12000, 20000); // 움직임 속도 느리게
      
      // 연속적인 자연스러운 움직임을 위한 애니메이션
      anime({
        targets: icon,
        translateX: [
          { value: moveX, duration: duration / 2, easing: 'easeInOutQuad' },
          { value: -moveX, duration: duration / 2, easing: 'easeInOutQuad' }
        ],
        translateY: [
          { value: moveY, duration: duration / 3, easing: 'easeInOutSine' },
          { value: -moveY, duration: duration / 3, easing: 'easeInOutSine' },
          { value: 0, duration: duration / 3, easing: 'easeInOutSine' }
        ],
        rotate: {
          value: anime.random(-15, 15),
          duration: duration,
          easing: 'easeInOutSine'
        },
        opacity: {
          value: [0.2, 0.6, 0.2],
          duration: duration,
          easing: 'easeInOutQuad'
        },
        delay: anime.random(0, 2000),
        loop: true,
        direction: 'alternate'
      });
    });
  }
}

// 페이지 로드 시 애니메이션 아이콘만 초기화하고, 타이핑 효과는 외부에서 초기화하도록 함
document.addEventListener('DOMContentLoaded', () => {
  // 애니메이션 아이콘 초기화
  const iconContainer = document.querySelector('.animated-icons-container');
  if (iconContainer) {
    new AnimatedIcons(iconContainer);
  }
}); 