// checkArr의 모든 노드(인풋)의 value를 확인하고 부적절할 경우 statusNode를 disabled 상태로 만들어 줍니다
function checkInput(checkArr, statusNode) {
  //flag = true => checkArr 모두 입력 상태
  let flag = true;
  for (const element of checkArr) {
    if (flag && element.value.length === 0) {
      //제목, 내용 두개 중 하나라도 입력이 안되면 false
      flag = false;
    } else if (element.value.length > 500) {
      //글자수 500자 수 제한
      element.value = element.value.substring(0, 500);
      alert("최대 500자 까지 입력 가능합니다!");
    }
  }
  flag
    ? statusNode.removeAttribute("disabled")
    : statusNode.setAttribute("disabled", "");
}

// checkArr에 있는 노드들에 checkInput함수 이벤트를 추가해주는 함수
export function addCheckInput(checkArr, statusNode) {
  checkArr.forEach((element) => {
    element.addEventListener("input", () => checkInput(checkArr, statusNode));
  });
}

// element(textarea 노드)에 리스너를 추가하여 높이가 내용에 따라 변하도록 해줍니다
export function dynamicTextAreaHeight(element) {
  element.addEventListener("input", () => {
    element.style.height = element.scrollHeight + "px";
  });
}

//편집, 뷰 모드에 따라 보이는 유무를 위해 노드를 수정해주는 함수
export function switchMode({ block, none, disable, enable }) {
  block?.forEach((element) => {
    element.style.display = "block";
  });
  none?.forEach((element) => {
    element.style.display = "none";
  });
  disable?.forEach((element) => {
    element.setAttribute("disabled", "");
  });
  enable?.forEach((element) => {
    element.removeAttribute("disabled");
  });
}

//todoItem 삭제 모달을 생성하기 위한 이벤트 발생
export function createDeleteModal(target, onDeleteBtnClicked) {
  target.dispatchEvent(
    new CustomEvent("showDeleteModal", {
      detail: {
        msg: "선택한 카드를 삭제할까요?",
        onDeleteBtnClicked,
      },
      bubbles: true,
    })
  );
}

export function getClosestElement(elements, y) {
  return elements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

export function requestUpdateItemCount(target, propagate) {
  target.dispatchEvent(
    new CustomEvent("updateItemCount", { bubbles: true, detail: { propagate } })
  );
}
