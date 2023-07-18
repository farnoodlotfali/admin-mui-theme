/* eslint-disable no-empty-pattern */
import { useState, createContext, useContext, memo } from "react";
import {
  Grid,
  InputAdornment,
  OutlinedInput,
  FormControl,
  InputLabel,
  IconButton,
  Select,
  MenuItem,
  FormHelperText,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import { Controller, useController } from "react-hook-form";

const FormContext = createContext({});

const FormContainer = memo(({ children, data, setData, errors }) => {
  const [selectDateKey, setSelectDateKey] = useState();

  return (
    <FormContext.Provider
      value={{
        selectDateKey,
        setSelectDateKey,
        errors,
        data,
        setData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
});

const typesLabel = ["checkbox"];

const FormInputs = memo(
  ({ children, inputs, gridProps, sx, startAfter = true }) => {
    const { errors } = useContext(FormContext);
    console.log(children.length);
    return (
      <>
        <Grid sx={sx} container spacing={2}>
          {!startAfter && !children.length ? children : children[0]}
          {inputs.map((input) => (
            <RenderInputs input={input} gridProps={gridProps} errors={errors} />
          ))}
          {startAfter && !children.length ? children : children[1]}
        </Grid>
      </>
    );
  }
);

const RenderInputs = memo(({ input, gridProps, errors }) => {
  if (input)
    return (
      <Grid
        item
        xs={12}
        md={3}
        {...gridProps}
        {...input.gridProps}
        key={input.name}
      >
        {input.type === "custom" ? (
          input.customView
        ) : (
          <FormControl variant="outlined" sx={{ width: "100%" }}>
            {!typesLabel.includes(input.type) && (
              <InputLabel error={!!errors?.[input.name]}>
                {input.label}
              </InputLabel>
            )}
            <HandleInputType input={input} />

            <FormHelperText error variant="outlined">
              {errors?.[input.name]?.message}
            </FormHelperText>
          </FormControl>
        )}
      </Grid>
    );
});

const HandleInputType = memo(({ input }) => {
  switch (input.type) {
    case "text":
    case "number":
    case "email":
    case "password":
      return <RenderInput input={input} />;
    case "textarea":
      return <RenderTextArea input={input} />;
    case "select":
      return <RenderSelect input={input} />;
    // case "date":
    //   return <RenderDate input={input} />;

    case "multiselect":
      return <RenderMultiSelect input={input} />;

    case "weekdays":
      return <RenderWeekDays input={input} />;
    // case "time":
    //   return <RenderTime input={input} />;
    case "checkbox":
      return <RenderCheckBox input={input} />;

    default:
      return <></>;
  }
});

export { FormContainer, FormInputs };

const RenderInput = memo(({ input }) => {
  const {
    field,
    fieldState: { error },
    formState: {},
  } = useController({
    name: input.name,
    control: input.control,
    rules: input.rules ?? {},
  });

  const handleOnChanged = (e) => {
    if (input.rules?.maxLength) {
      if (e.target.value.length > input.rules?.maxLength.value) {
        return;
      }
      field.onChange(e);
    } else {
      field.onChange(e);
    }
  };

  return (
    <OutlinedInput
      inputRef={field.ref}
      value={field.value === 0 ? "0" : field.value || ""}
      type={input.type}
      label={input.label}
      sx={{ width: "100%" }}
      onChange={handleOnChanged}
      className={input.noInputArrow && "input-phone-number"}
      onWheel={(e) => input.noInputArrow && e.target.blur()}
      autoComplete={input.type === "password" ? "new-password" : undefined}
      error={error}
      readOnly={input.readOnly}
    />
  );
});

// const RenderTime = memo(({ input }) => {
//   const [show, setShow] = useState(false);
//   const {
//     field,
//     fieldState: { error },
//     formState: {},
//   } = useController({
//     name: input.name,
//     control: input.control,
//     rules: input.rules ?? {},
//   });

//   const handleOnClicked = () => {
//     setShow(true);
//   };

//   const handleOnChanged = (e) => {
//     field.onChange(addZeroForTime(e));
//   };

//   return (
//     <>
//       <OutlinedInput
//         inputRef={field.ref}
//         value={addZeroForTime(field.value)}
//         onChange={handleOnChanged}
//         error={error}
//         label={input.label}
//         readOnly={true}
//         onClick={handleOnClicked}
//         endAdornment={
//           <InputAdornment position="end">
//             <IconButton disabled={input.readOnly} onClick={handleOnClicked}>
//               <AccessAlarmIcon />
//             </IconButton>
//           </InputAdornment>
//         }
//       />

//       <SelectTime
//         open={show}
//         onClose={() => setShow((prev) => !prev)}
//         data={field.value || ""}
//         setData={handleOnChanged}
//       />
//     </>
//   );
// });

const RenderTextArea = memo(({ input }) => {
  const {
    field,
    fieldState: { error },
    formState: {},
  } = useController({
    name: input.name,
    control: input.control,
    rules: input.rules ?? {},
  });

  return (
    <OutlinedInput
      inputRef={field.ref}
      value={field.value || ""}
      onChange={field.onChange}
      type={input.type}
      label={input.label}
      readOnly={input.readOnly}
      sx={{ width: "100%" }}
      multiline
      rows={3}
      error={error}
    />
  );
});

// const RenderDate = memo(({ input }) => {
//   const [showSelectDate, setShowSelectDate] = useState(false);
//   const [keys, setKeys] = useState({});
//   const {
//     field,
//     fieldState: { error },
//     formState: {},
//   } = useController({
//     name: input.name,
//     control: input.control,
//     rules: input.rules ?? {},
//   });

//   const handleOnClicked = () => {
//     setShowSelectDate(true);
//     setKeys(input.name);
//   };

//   return (
//     <>
//       <OutlinedInput
//         inputRef={field.ref}
//         value={field.value?.[`${input.name}_fa`] || ""}
//         onChange={field.onChange}
//         error={error}
//         label={input.label}
//         readOnly={input.readOnly}
//         onClick={handleOnClicked}
//         endAdornment={
//           <InputAdornment position="end">
//             <IconButton disabled={input.readOnly} onClick={handleOnClicked}>
//               <CalendarMonthOutlinedIcon />
//             </IconButton>
//           </InputAdornment>
//         }
//       />

//       <SelectDate
//         open={showSelectDate}
//         onClose={() => setShowSelectDate((prev) => !prev)}
//         data={field.value || ""}
//         setData={field.onChange}
//         dataKey={keys}
//       />
//     </>
//   );
// });

const RenderSelect = memo(({ input }) => {
  const {
    field,
    fieldState: { error },
    formState: {},
  } = useController({
    name: input.name,
    control: input.control,
    rules: input.rules ?? {},
  });
  return (
    <Select
      label={input.label}
      error={error}
      inputRef={field.ref}
      value={field.value === 0 ? "0" : field.value}
      onChange={field.onChange}
      readOnly={input.readOnly}
    >
      {(!input.options || input.options.length === 0) && (
        <MenuItem value="" disabled>
          موردی موجود نیست
        </MenuItem>
      )}
      {input.options?.map((option) => (
        <MenuItem value={option[input.valueKey]}>
          {option[input.labelKey]}
        </MenuItem>
      ))}
    </Select>
  );
});

const RenderMultiSelect = memo(({ input }) => {
  const {
    field,
    fieldState: { error },
    formState: {},
  } = useController({
    name: input.name,
    control: input.control,
    rules: input.rules ?? {},
  });
  return (
    <Select
      label={input.label}
      error={error}
      inputRef={field.ref}
      value={field.value || []}
      onChange={field.onChange}
      multiple
      readOnly={input.readOnly}
    >
      {(!input.options || input.options.length === 0) && (
        <MenuItem value="" disabled>
          موردی موجود نیست
        </MenuItem>
      )}
      {input.options?.map((option) => (
        <MenuItem value={option[input.valueKey]}>
          {option[input.labelKey]}
        </MenuItem>
      ))}
    </Select>
  );
});

const RenderWeekDays = memo(({ input }) => {
  input.options = [
    { id: 1, title: "شنبه" },
    { id: 2, title: "یک‌شنبه" },
    { id: 3, title: "دوشنبه" },
    { id: 4, title: "سه‌شنبه" },
    { id: 5, title: "چهارشنبه" },
    { id: 6, title: "پنج‌شنبه" },
    { id: 7, title: "جمعه" },
  ];
  input.valueKey = "id";
  input.labelKey = "title";

  return <RenderMultiSelect input={input} />;
});

const RenderCheckBox = memo(({ input }) => {
  const {
    field,
    fieldState: { error },
    formState: {},
  } = useController({
    name: input.name,
    control: input.control,
    rules: input.rules ?? {},
  });

  return (
    <FormGroup sx={{ width: "100%" }}>
      <FormControlLabel
        control={
          <Checkbox
            ref={field.ref}
            defaultChecked={!!field.value}
            readOnly={input.readOnly}
            value={!!field.value}
            onChange={(e) => {
              field.onChange(e.target.checked);
            }}
          />
        }
        label={input.label}
      />
    </FormGroup>
  );
});
