import { useMutation } from "@tanstack/react-query";

export const useSubmitForm = () =>
  useMutation({
    mutationFn: async (data: any) => {
      await new Promise((res) => setTimeout(res, 1000));
      console.log("Form submitted:", data);
      return data;
    },
  });