import { useEffect, useRef, useState } from "react";
import * as T from "./TextField.style";
import { ArrowDownIcon } from "../Icons";
import { useTheme } from "styled-components";

function Dropdown({ width = "100%", optionData = [] }) {
  const theme = useTheme();
  const selectRef = useRef(null);
  const [isShowOptions, setIsShowOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState(optionData[0]?.value ?? ""); // label에 data 첫번째 값 value 표시 (빈 배열인 경우 빈 문자열 반환)

  const handleChangeSelectValue = (e) => {
    setCurrentValue(e.target.getAttribute("value"));
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsShowOptions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);

  return (
    <>
      <T.SelectBox
        width={width}
        onClick={() => setIsShowOptions((prev) => !prev)}
        ref={selectRef}
      >
        <T.Label $show={isShowOptions}>
          {currentValue}
          <ArrowDownIcon color={theme.colors.gray[900]} />
        </T.Label>
        <T.Options $show={isShowOptions}>
          {optionData.map((data) => (
            <T.Option
              key={data.key}
              value={data.value}
              onClick={handleChangeSelectValue}
            >
              {data.value}
            </T.Option>
          ))}
        </T.Options>
      </T.SelectBox>
    </>
  );
}

function InputField({
  width = "100%",
  placeholder = "placeholder",
  value,
  onChange,
}) {
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    onChange(e.target.value);
    setError(e.target.value === "");
  };

  const handleBlur = () => {
    setError(value === "");
  };

  return (
    <>
      <T.Input
        width={width}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        $error={error}
      />
      {error && <T.ErrorMessage>값을 입력해 주세요.</T.ErrorMessage>}
    </>
  );
}

export { Dropdown, InputField };
