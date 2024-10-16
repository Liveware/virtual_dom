# Virtual DOM with Rust and WebAssembly

이 프로젝트는 Rust와 WebAssembly를 사용하여 버추얼 DOM을 구현하고, JavaScript와 WebSocket을 통해 상호작용하는 예제입니다. Rust에서 작성된 `VNode` 구조체를 통해 간단한 버추얼 DOM 트리를 생성하고, diff 및 patch 메서드를 통해 DOM 업데이트를 최적화합니다.

## Features

- Rust로 버추얼 DOM 구현
- 변경된 attribute만 선택적으로 DOM에 반영하여 성능 최적화
- WebSocket을 통해 서버에서 DOM 업데이트 데이터를 실시간으로 수신 및 반영

---

## Prerequisites

- **Rust** 및 **wasm-pack** 설치가 필요합니다.
  - Rust 설치: https://www.rust-lang.org/tools/install
  - wasm-pack 설치: `cargo install wasm-pack`

- **Node.js** (테스트 및 빌드에 필요) 및 간단한 **웹 서버** 환경 설정

---

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Liveware/virtual_dom
   cd virtual-dom
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

---

## Build Instructions

1. **Build the WebAssembly Module**:

   `wasm-pack`을 이용하여 WebAssembly 모듈을 빌드합니다.

   ```bash
   wasm-pack build --target web
   ```

2. **Serve the Project**:

   로컬 서버에서 WebAssembly 및 JavaScript 파일을 실행합니다. 간단한 웹 서버를 실행하려면, `http-server`와 같은 npm 패키지를 사용할 수 있습니다.

   ```bash
   npx http-server .
   ```

   또는 다음과 같은 Python 웹 서버를 사용할 수도 있습니다.

   ```bash
   python3 -m http.server
   ```

3. **Run the Project**:

   브라우저에서 `localhost`로 접속하여 프로젝트를 실행합니다.

---

## Usage

1. 서버를 실행한 후, JavaScript에서 `run()` 함수를 호출하여 WebSocket 연결을 설정하고 버추얼 DOM을 업데이트합니다.

2. WebSocket을 통해 서버에서 DOM 업데이트 패킷을 받으면, Rust로 작성된 `VNode` 객체를 기반으로 새로운 버추얼 DOM 트리를 생성하고, `diff` 및 `patch` 메서드를 사용해 변경된 부분만 DOM에 반영합니다.

---

## Project Structure

- **src/lib.rs**: Rust로 작성된 버추얼 DOM 로직과 `VNode` 구조체 정의.
- **virtual_dom.js**: JavaScript 코드로 WebSocket 설정 및 DOM 업데이트 함수 정의.
- **README.md**: 프로젝트 설명서 (이 파일).

---

## License

MIT License