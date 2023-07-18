import { FormContainer, FormInputs } from "../components/form/Form";
import { Card } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";

const TestForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  const Inputs = [
    {
      type: "number",
      name: "mobile",
      label: "mobile",
      control: control,
      rules: { required: "mobile needed" },
    },
    {
      type: "password",
      name: "password",
      label: "password",
      control: control,
      rules: {
        required: true,
      },
    },
  ];
  // handle on change inputs
  const handleChange = (name, value) => {
    setValue(name, value);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer data={watch()} setData={handleChange} errors={errors}>
          <Card elevation={0} sx={{ p: 3, mb: 2, boxShadow: 1, overflow: "visible" }}>
            <FormInputs inputs={Inputs} gridProps={{ md: 12 }}></FormInputs>
            12121
            <LoadingButton
              variant="contained"
              size="large"
              sx={{ width: "100%", mt: 3 }}
              loading={isSubmitting}
              type="submit"
              color="secondary"
            >
              ورود
            </LoadingButton>
          </Card>
        </FormContainer>
      </form>
    </>
  );
};

export default TestForm;
