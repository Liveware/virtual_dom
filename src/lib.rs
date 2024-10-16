use wasm_bindgen::prelude::*;
use std::collections::HashMap;

#[wasm_bindgen]
pub struct VNode {
    #[allow(dead_code)] // 경고 억제
    tag: String,
    attributes: HashMap<String, String>,
    children: Vec<VNode>,
    text: Option<String>, // 텍스트 노드를 위한 필드 추가
}

#[wasm_bindgen]
impl VNode {
    #[wasm_bindgen(constructor)]
    pub fn new(tag: String) -> VNode {
        VNode {
            tag,
            attributes: HashMap::new(),
            children: Vec::new(),
            text: None,
        }
    }

    pub fn set_attribute(&mut self, key: String, value: String) {
        self.attributes.insert(key, value);
    }

    pub fn append_child(&mut self, child: VNode) {
        self.children.push(child);
    }

    pub fn set_text(&mut self, text: String) { // 텍스트 설정 메서드 추가
        self.text = Some(text);
    }
}
