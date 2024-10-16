import init, { VNode } from './virtual_dom.js';

let rootNode;

async function run() {
    await init('./virtual_dom_bg.wasm');

    // 초기 VNode 설정
    rootNode = new VNode("div");
    rootNode.set_attribute("id", "container");

    document.getElementById("add").addEventListener("click", () => addElement());
    document.getElementById("remove").addEventListener("click", () => removeElement());
}

function addElement() {
    // 새로운 자식 노드 추가
    const newElement = new VNode("p");
    newElement.set_attribute("class", "child");
    newElement.set_attribute("style", "color: green;");

    const spanChild = new VNode("span");
    spanChild.set_attribute("class", "text");
    spanChild.append_child(new VNode("Text node inside span"));

    newElement.append_child(spanChild);
    rootNode.append_child(newElement);
    
    render(rootNode);
}

function removeElement() {
    const container = document.getElementById("container");
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}

function render(vnode) {
    const container = document.getElementById("container");
    container.innerHTML = ''; // 이전 렌더링 지우기

    console.log(vnode);
    // vnode의 태그가 정의되지 않으면 함수 종료
    if (!vnode.tag) {
        console.error("VNode의 tag가 정의되지 않았습니다.");
        return;
    }

    // 루트 엘리먼트 생성
    const element = document.createElement(vnode.tag);

    // attributes 설정
    if (vnode.attributes && Object.keys(vnode.attributes).length > 0) {
        for (const [key, value] of Object.entries(vnode.attributes)) {
            element.setAttribute(key, value);
        }
    }

    // 자식 노드가 있을 경우 재귀적으로 처리
    if (vnode.children && vnode.children.length > 0) {
        vnode.children.forEach(childVNode => {
            if (childVNode) { // childVNode가 VNode 인스턴스인지 확인
                const childElement = render(childVNode); // 자식 노드도 render 호출
                if (childElement) {
                    element.appendChild(childElement);
                }
            }
        });
    }

    // DOM에 추가
    container.appendChild(element);

    return element; // 최상위 호출자에 반환
}

run();
