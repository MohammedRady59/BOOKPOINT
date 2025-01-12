/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { SignInFormData } from "@/data";
import { IFormInputSignIn } from "@/Interface";
import { useSigninMutation } from "@/redux/features/Api/Authapi";
import {
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
//import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import InputError from "./InputError";
import { signinSchema } from "@/validation/schema";
import Loader from "./Loader";

function SignInForm() {
  //const { push } = useRouter();
  const [SignInFunction, { isLoading }] = useSigninMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputSignIn>({
    resolver: yupResolver(signinSchema),
  });

  const onSubmit: SubmitHandler<IFormInputSignIn> = async (data) => {
    try {
      const res: any = await SignInFunction(data);
      if (res.error) {
        toast.error(`${res.error.data.message}`, {
          position: "bottom-center",
          duration: 1500,
        });
      }
      if (res.data) {
        toast.success(`${res.data.message}`, {
          position: "bottom-center",
          duration: 1500,
        });
        localStorage.setItem("token", res.data.payload.token);
        location.replace("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const SignInInputs = SignInFormData.map((input, idx) => (
    <FormControl key={idx} sx={{ width: "100%", marginBottom: 3 }}>
      <TextField
        {...register(input.id)}
        id={input.id}
        label={input.label}
        variant="outlined"
        type={input.type}
        sx={{ width: "100%" }}
      />
      {errors[input.id] && <InputError msg={errors[input.id]?.message} />}
    </FormControl>
  ));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        alignItems="center"
        justifyContent="center"
        direction="column"
        spacing={3}
        sx={{ width: "100%", maxWidth: "400px", mx: "auto" }}
      >
        {SignInInputs}

        <Button
          variant="contained"
          disabled={isLoading}
          type="submit"
          sx={{
            width: "fit-content",
            backgroundColor: "#115e59",
            color: "white",
            paddingX: 4,
            fontSize: "1.25rem",
            marginTop: 2,
            borderRadius: 1,
          }}
        >
          {isLoading ? <Loader /> : "Submit"}
        </Button>

        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            fontSize: "14px",
            textAlign: "center",
            marginTop: 2,
            color: "text.secondary",
          }}
        >
          Don&apos;t have an account?{" "}
          <a href="/signup" style={{ color: "#0d9488" }}>
            Sign Up
          </a>
        </Typography>
      </Stack>
    </form>
  );
}

export default SignInForm;
