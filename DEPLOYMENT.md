# K-Sleep Care 배포 가이드

이 가이드는 https://ksleep.care 도메인으로 사이트를 배포하는 방법을 설명합니다.

## 배포 옵션

### 옵션 1: Vercel (권장)

Vercel은 React Router를 사용하는 SPA에 최적화되어 있으며, 무료 플랜으로도 커스텀 도메인을 지원합니다.

#### 1단계: Vercel 계정 생성
1. https://vercel.com 에서 계정 생성 (GitHub 계정으로 로그인 권장)

#### 2단계: 프로젝트 배포
1. Vercel 대시보드에서 "Add New Project" 클릭
2. GitHub 저장소 연결 (또는 GitLab, Bitbucket)
3. 프로젝트 설정:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (기본값)
   - **Build Command**: `npm run build` (자동 감지됨)
   - **Output Directory**: `dist` (자동 감지됨)
   - **Install Command**: `npm install` (자동 감지됨)
4. "Deploy" 클릭

#### 3단계: 커스텀 도메인 연결
1. Vercel 대시보드에서 프로젝트 선택
2. "Settings" → "Domains" 탭으로 이동
3. "Add Domain" 클릭
4. `ksleep.care` 입력
5. DNS 설정 안내를 따릅니다:

**DNS 레코드 설정 (도메인 제공업체에서 설정):**
- **Type**: A
- **Name**: @ (또는 비워두기)
- **Value**: `76.76.21.21` (Vercel IP)

또는

- **Type**: CNAME
- **Name**: @ (또는 비워두기)
- **Value**: `cname.vercel-dns.com`

**www 서브도메인도 추가하려면:**
- **Type**: CNAME
- **Name**: www
- **Value**: `cname.vercel-dns.com`

6. DNS 설정 후 Vercel이 자동으로 SSL 인증서를 발급합니다 (몇 분 소요)

#### 4단계: 환경 변수 설정 (필요한 경우)
- "Settings" → "Environment Variables"에서 필요한 환경 변수 추가

---

### 옵션 2: Netlify

#### 1단계: Netlify 계정 생성
1. https://netlify.com 에서 계정 생성

#### 2단계: 프로젝트 배포
1. Netlify 대시보드에서 "Add new site" → "Import an existing project"
2. Git 저장소 연결
3. 빌드 설정:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. "Deploy site" 클릭

#### 3단계: 커스텀 도메인 연결
1. "Site settings" → "Domain management"
2. "Add custom domain" 클릭
3. `ksleep.care` 입력
4. DNS 설정 안내를 따릅니다

---

### 옵션 3: GitHub Pages (고급)

GitHub Pages는 정적 사이트 호스팅을 제공하지만, React Router 설정이 필요합니다.

#### 필요한 설정:
1. `vite.config.ts`에 `base` 경로 추가
2. GitHub Actions 워크플로우 설정
3. GitHub Pages 설정에서 커스텀 도메인 연결

---

## 로컬 빌드 테스트

배포 전에 로컬에서 빌드가 정상적으로 작동하는지 확인:

```bash
# 의존성 설치
npm install

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

---

## 도메인 DNS 설정 체크리스트

도메인 제공업체(예: GoDaddy, Namecheap, Cloudflare 등)에서 다음을 확인:

- [ ] A 레코드 또는 CNAME 레코드가 올바르게 설정됨
- [ ] DNS 전파가 완료됨 (최대 48시간 소요, 보통 몇 분~몇 시간)
- [ ] SSL 인증서가 자동으로 발급됨 (Vercel/Netlify는 자동 처리)

---

## 문제 해결

### 404 에러가 발생하는 경우
- React Router를 사용하므로 모든 경로를 `index.html`로 리다이렉트해야 합니다
- `vercel.json` 또는 `netlify.toml`의 rewrites 설정을 확인하세요

### 도메인이 연결되지 않는 경우
- DNS 전파 시간을 기다리세요 (최대 48시간)
- DNS 설정이 올바른지 확인하세요
- `nslookup ksleep.care` 또는 `dig ksleep.care` 명령어로 DNS 확인

### 빌드 실패
- `package.json`의 의존성이 올바른지 확인
- Node.js 버전이 호환되는지 확인 (Vercel/Netlify는 자동으로 감지)

---

## 추가 최적화

### 이미지 최적화
- `public` 폴더의 이미지들을 WebP 형식으로 변환 고려
- 이미지 크기 최적화

### 성능 모니터링
- Vercel Analytics 또는 Google Analytics 추가
- Lighthouse 점수 확인

---

## 연락처

배포 관련 문의사항이 있으면 개발팀에 문의하세요.

