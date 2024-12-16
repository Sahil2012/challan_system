import { Divider, Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ClientInfoStep from "../components/ClientInfoStep";
import AddItemsStep from "../components/AddItemsStep";
import PaymentDetailsStep from "../components/PaymentDetailsStep";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Spacer,
} from "@nextui-org/react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Cutomer Details",
  },
  {
    id: 2,
    title: "Add Products",
  },
  {
    id: 3,
    title: "Payment & Delivery",
  },
  {
    id: 4,
    title: "Confirm Challan",
  },
];

export default function CreateChallan() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { error },
  } = useForm( {
    defaultValues: {
      items: [{
        itemName: "",
      quantity: "",
      mrp: "",
      sellingPrice: ""
      }],
      totalMRP: 0,
      totalSellingPrice: 0,
      finalAmount:0
    },
  });


  const [currStep, setCurrStep] = useState(0);
  const [prevStep, setPrevStep] = useState(0);
  const delta = currStep - prevStep;

  // console.log(watch("client_name"));

  return (
    <div>
      <Spacer y={18} />
      <Spacer y={4} />
      <div className="flex items-center justify-center">
        <Card className="w-[95%] max-h-[60%]">
          <CardHeader>
            <div className="flex justify-between w-[100%]">
            <div className="flex items-center">
            <span className="py-2 px-2 text-primary font-bold text-xl capitalize">
              {steps[currStep].title}
            </span>
            </div>
            <div className="w-[70%]">
            <Stepper activeStep={currStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label.id}>
            <StepLabel>{label.title}</StepLabel>
          </Step>
        ))}
      </Stepper>
            </div>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="overflow-y-auto"
            style={{
              maxHeight: "500px"
            }}>
            <form className="overflow-auto scrollbar-hide">
              {currStep == 0 && (
                <motion.div
                  initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ClientInfoStep register={register} />
                </motion.div>
              )}
              {currStep == 1 && (
                <motion.div
                  initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <AddItemsStep control={control} setValue={setValue}/>
                </motion.div>
              )}
              {currStep == 2 && (
                <motion.div
                  initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <PaymentDetailsStep register={register} />{" "}
                </motion.div>
              )}
              {currStep == 3 && (
                <motion.div
                  initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <PaymentDetailsStep register={register} />{" "}
                </motion.div>
              )}
            </form>
          </CardBody>
          <Divider />
          <CardFooter>
            <div className="flex justify-between items-center flex-grow">
              <Button
                isIconOnly
                disabled={currStep == 0}
                color="primary"
                variant="bordered"
                onClick={() => {
                  setPrevStep(currStep);
                  setCurrStep(currStep - 1);
                }}
              >
                <KeyboardArrowLeftIcon />
              </Button>
              <Button
                isIconOnly
                disabled={currStep == steps.length - 1}
                color="primary"
                variant="bordered"
                className="group hover:bg-primary"
                onClick={() => {
                  setPrevStep(currStep);
                  setCurrStep(currStep + 1);
                }}
              >
                <KeyboardArrowRightIcon  sx={{
          color: "primary", // Default color
          ".group:hover &": {
            color: "white", // Hover color
          } // Optional: Smooth transition
        }}/>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}