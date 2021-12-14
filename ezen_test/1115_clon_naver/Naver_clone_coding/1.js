/**
 * @filename : 1.js
 * @author : 서지영(jen.jyseo@gmail.com)
 * @description : 정규표현식 검사 수행 후, ture/false로 해당 정규 표현식 충족하는지 여부를 반환하는 함수들의 모음
 */

// prototype을 지양하고 class 사용을 권장한다.
class RegexHelper {
  //불필요한 생성자는 사용하지 않는다.
  //constructor(){}

  /**
   * 값의 존재 여부를 검사한다.
   * @param {string} selector 입력요소에 해당하는 CSS 선택자
   * @param {string} msg 값이 없을 경우 표시할 메시지 내용
   * @return {boolean} 입력된 경우 true / 입력되지 않은 경우 false
   */
  value(selector, msg) {
    //앞뒤의 공백을 제외하고 내용만 추출
    const field = document.querySelector(selector);
    const content = field.value.trim();

    if (!content) {
      // 값이 없다면?
      alert(msg); //메시지 표시
      field.focus(); //대상요소에게 포커스 강제 지정
      return false; //실패했음을 리턴
    }

    return true; //성공했음을 리턴
  }

  /**
   * 입력값이 지정된 글자수 미만인지 검사한다.
   * @param {string} selector 입력요소에 해당하는 CSS 선택자
   * @param {int} len 최대 글자수
   * @param {string} msg 값이 없을 경우 표시될 메시지
   *@return {boolean} 지정된 글자수 이하인 경우 true / 이상일 경우 false
   */
  min_length(selector, len, msg) {
    //앞뒤의 공백을 제외하고 내용만 추출
    const field = document.querySelector(selector);
    const content = field.value.trim();

    if (content.length < len) {
      //입력값이 주어진 길이보다 작다면?
      alert(msg); //메시지 표시
      field.value = ""; //입력값을 강제로 지운다.
      field.focus(); //대상 요소에게 포커스 강제 지정
      return false; //실패했음을 리턴
    }
    return true;
  }

  /**
   * 드롭박스의 선택값을 검사한다.
   * @param {string} selector 입력요소에 해당하는 CSS 선택지
   * @param {string} msg 값이 없을 경우 표시될 메시지
   * @return {boolean} 0이 아닌 다른 인덱스가 선택된 경우 true / 그렇지 않은 경우 false
   */
  select(selector, msg) {
    let field = document.querySelector(selector);
    let checked = field.selectedIndex;
    if (checked == 0) {
      alert(msg);
      return false;
    }
    return true;
  }

  /**
   * 두 요소의 입력값이 동일한지 검사한다.
   * @param {string} origin_selector 원본 요소의 selector
   * @param {string} compare_selector 검사 대상 요소의 selector
   * @param {string} msg 검사에 실패할 경우 표시할 메시지
   * @return {boolean} 동일한 경우 true / 다른 경우 false
   */
  compare_to(origin_selector, compare_selector, msg) {
    const origin = document.querySelector(origin_selector);
    const compare = document.querySelector(compare_selector);
    let src = origin.value.trim(); //원본값을 가져온다.
    let dsc = compare.value.trim(); //비교할 값을 가져온다.

    if (src != dsc) {
      //두 요소의 입력값이 다르다면?
      alert(msg); //메시지 표시
      origin.value = ""; //원본요소의 입력값 지움
      compare.value = ""; //검사대상의 입력값 지움
      origin.focus(); //원본요소에게 포커스 강제 지정
      return false; //실패했음을 리턴
    }
    return true; //성공했음을 리턴
  }

  /** 입력값이 정규표현식을 충족하는지 검사한다.
   * @param {string} selector 입력요소에 해당하는 CSS 선택지
   * @param {string} msg 표시할 메시지
   * @param {object} regex_expr 검사할 정규표현식
   * @return {boolean} 표현식을 충족할 경우 true / 그렇지 않을 경우 false
   */
  field(selector, msg, regex_expr) {
    const field = document.querySelector(selector);
    var src = field.value.trim(); //선택자로 리턴된 요소객체의 공백을 제거한 입력값을 가져온다.

    //입력값이 없거나 입력값에 대한 정규표현식 검사가 실패라면?
    if (!src || !regex_expr.test(src)) {
      alert(msg); //메세지 표시
      field.value = ""; //입력값을 강제로 지운다.
      field.focus(); //포커스 강제 지정
      return false; //실패했음을 리턴
    }
    return true; //성공했음을 리턴
  }

  /**
   * 아이디가 영문소문자와 숫자 특수문자(_),(-) 5~20글자로 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string} selector 입력요소에 해당하는 CSS 선택자
   * @param {string} msg 표시할 메시지
   * @return {boolean} 표현식을 충족할 경우 true / 그렇지 않을 경우 false
   */
  eng_num_id(selector, msg) {
    return this.field(selector, msg, /^[a-z0-9-_][a-z0-9-_].{5,20}$/);
  }

  /**
   * 비밀번호가 영문과 숫자 특수문자 8~16글자로 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string} selector 입력요소에 해당하는 CSS 선택자
   * @param {string} msg 표시할 메시지
   * @return {boolean} 표현식을 충족할 경우 true / 그렇지 않을 경우 false
   */
  eng_num_pw(selector, msg) {
    return this.field(
      selector,
      msg,
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
    );
  }

  /**
   * 이름이 영문과 한글로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string} selector 입력요소에 해당하는 CSS 선택자
   * @param {string} msg 표시할 메시지
   * @return {boolean} 표현식을 충족할 경우 true / 그렇지 않을 경우 false
   */
  eng_num(selector, msg) {
    return this.field(selector, msg, /^[a-zA-Zㄱ-힣][a-zA-Zㄱ-힣 ]*$/);
  }

  /**
   * 이메일 주소 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string} selector 입력요소에 해당하는 CSS 선택자
   * @param {string} msg 표시할 메시지
   * @return {boolean} 표현식을 충족할 경우 true / 그렇지 않을 경우 false
   */
  email(selector, msg) {
    return this.field(
      selector,
      msg,
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    );
  }

  /**
   * 핸드폰 번호 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string} selector 입력요소에 해당하는 CSS 선택자
   * @param {string} msg 표시할 메시지
   * @return {boolean} 표현식을 충족할 경우 true / 그렇지 않을 경우 false
   */
  cellphone(selector, msg) {
    return this.field(selector, msg, /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/);
  }
}
