const fs = require('fs');
const path = require('path');

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
    if (!fs.existsSync('public/lib')) {
      fs.mkdirSync('public/lib');
    }
    
    const libFiles = fs.readdirSync('lib');
    libFiles.forEach(file => {
      fs.copyFileSync(
        path.join('lib', file),
        path.join('public/lib', file)
      );
    });
    console.log('Copied lib directory');
  }
  
  // documentation 디렉토리의 assets 복사
  if (fs.existsSync('documentation/assets')) {
    if (!fs.existsSync('public/documentation')) {
      fs.mkdirSync('public/documentation');
      fs.mkdirSync('public/documentation/assets');
      
      if (fs.existsSync('documentation/assets/img')) {
        if (!fs.existsSync('public/documentation/assets/img')) {
          fs.mkdirSync('public/documentation/assets/img');
        }
        
        const imgFiles = fs.readdirSync('documentation/assets/img');
        imgFiles.forEach(file => {
          fs.copyFileSync(
            path.join('documentation/assets/img', file),
            path.join('public/documentation/assets/img', file)
          );
        });
      }
    }
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