const fs = require('fs');
const path = require('path');

// 디렉토리 재귀적으로 복사하는 함수
function copyDirectoryRecursive(source, destination) {
  // 디렉토리가 존재하지 않으면 생성
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }
  
  // 소스 디렉토리의 모든 항목 읽기
  const items = fs.readdirSync(source);
  
  // 각 항목에 대해 처리
  for (const item of items) {
    const sourcePath = path.join(source, item);
    const destPath = path.join(destination, item);
    
    // 파일인지 디렉토리인지 확인
    const stat = fs.statSync(sourcePath);
    
    if (stat.isDirectory()) {
      // 디렉토리면 재귀적으로 복사
      copyDirectoryRecursive(sourcePath, destPath);
    } else {
      // 파일이면 복사
      fs.copyFileSync(sourcePath, destPath);
    }
  }
}

// 배포를 위한 public 디렉토리 생성 함수
function createPublicDirectory() {
  console.log('Creating public directory for Vercel deployment...');
  
  // public 디렉토리가 없으면 생성
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
    console.log('Created public directory');
  }
  
  // 모든 HTML, CSS, JS 파일 및 필요한 리소스 복사
  const filesToCopy = [
    'index.html',
    'support.html',
    'launched.html',
    'learn.html',
    'styles.css',
    'typing-styles.css',
    'typing-effect.js',
    'common.js'
  ];
  
  // lib 디렉토리 복사
  if (fs.existsSync('lib')) {
    copyDirectoryRecursive('lib', 'public/lib');
    console.log('Copied lib directory');
  }
  
  // documentation 디렉토리의 assets 복사
  if (fs.existsSync('documentation/assets')) {
    copyDirectoryRecursive('documentation/assets', 'public/documentation/assets');
    console.log('Copied documentation assets');
  }
  
  // 그 외 필요한 파일들 복사
  filesToCopy.forEach(file => {
    if (fs.existsSync(file)) {
      fs.copyFileSync(file, path.join('public', file));
      console.log(`Copied ${file}`);
    } else {
      console.log(`Warning: ${file} not found`);
    }
  });
  
  console.log('Public directory created successfully for Vercel deployment');
}

// 실행
createPublicDirectory(); 