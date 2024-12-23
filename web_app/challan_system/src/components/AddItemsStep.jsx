import { Button, Divider, Input } from "@nextui-org/react";
import React, { useEffect } from "react";
import { useFieldArray, useWatch } from "react-hook-form";
import { DeleteIcon } from "../assets/DeleteIcon";
import AddIcon from "@mui/icons-material/Add";

export default function AddItemsStep({ control, setValue }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const items = useWatch({
    control,
    name: "items", 
  });

  const discountPercentage = useWatch({
    control,
    name: "discountPercentage", 
    defaultValue: 0,
  });

  const totalMRP = items?.reduce((sum, item) => sum + (parseFloat(item.mrp) || 0) * parseFloat(item.quantity || 0), 0) || 0;
  const totalSellingPrice =
    items?.reduce(
      (sum, item) =>
        sum + (parseFloat(item.selling_price || 0) * parseFloat(item.quantity || 0)),
      0
    ) || 0;

  useEffect(() => {
    // Calculate the final amount based on totalSellingPrice and discountPercentage
    const finalAmount =
      totalSellingPrice - (totalSellingPrice * parseFloat(discountPercentage || 0)) / 100;

    // Update the form state
    setValue("totalMRP", totalMRP);
    setValue("totalSellingPrice", totalSellingPrice);
    setValue("finalAmount", finalAmount.toFixed(2));
  }, [items, discountPercentage, totalMRP, totalSellingPrice, setValue]);

  const handleAddRow = () => {
    const lastItem = items?.[items.length - 1];
    if (
      lastItem &&
      (!lastItem.item_name ||
        !lastItem.quantity ||
        !lastItem.mrp ||
        !lastItem.selling_price)
    ) {
      alert("Please complete the previous row before adding a new one.");
      return;
    }

    append({
      item_name: "",
      quantity: "",
      mrp: "",
      selling_price: "",
    });
  };

  return (
    <div>
      <div className="my-2 flex-col">
        <div className="flex justify-between my-2 gap-4">
          <span className="flex flex-1 text-sm font-extrabold max-w-xs">
            ITEM NAME
          </span>
          <span className="flex flex-1 text-sm font-extrabold max-w-xs">
            QUANTITY
          </span>
          <span className="flex flex-1 text-sm font-extrabold max-w-xs">
            MRP
          </span>
          <span className="flex flex-1 text-sm font-extrabold max-w-xs">
            SELLING PRICE
          </span>
          <span className="flex flex-1 text-sm font-extrabold max-w-xs justify-center">
            ACTIONS
          </span>
        </div>
        <Divider />

        {fields.map((field, index) => (
          <div key={field.id} className="flex justify-between my-2 gap-4">
            <Input
              type="text"
              label="Item Name"
              className="max-w-xs flex-1"
              size="sm"
              variant="bordered"
              {...control.register(`items.${index}.item_name`)}
            />

            <Input
              type="number"
              label="Quantity"
              className="max-w-xs flex-1"
              size="sm"
              variant="bordered"
              {...control.register(`items.${index}.quantity`)}
            />

            <Input
              type="number"
              label="MRP"
              className="max-w-xs flex-1"
              size="sm"
              variant="bordered"
              {...control.register(`items.${index}.mrp`)}
            />

            <Input
              type="number"
              label="Selling Price"
              className="max-w-xs flex-1"
              size="sm"
              variant="bordered"
              {...control.register(`items.${index}.selling_price`)}
            />

            <div
              className="text-danger text-lg cursor-pointer max-w-xs flex items-center flex-1 justify-center"
              onClick={() => remove(index)}
            >
              <DeleteIcon />
            </div>
          </div>
        ))}

        <Button
          color="primary"
          endContent={<AddIcon />}
          variant="bordered"
          className="mt-2"
          onClick={handleAddRow}
        >
          Add Item
        </Button>
      </div>
      <Divider />
      <div className="flex justify-between my-4">
        <span className="font-bold">Total MRP:</span>
        <span className="font-bold">{totalMRP}</span>
      </div>
      <div className="flex justify-between my-4">
        <span className="font-bold">Total Selling Price:</span>
        <span className="font-bold">{totalSellingPrice}</span>
      </div>
      <div className="flex justify-between my-4">
        <Input
          type="number"
          label="Discount Percentage"
          className="max-w-xs flex-1"
          max={100}
          min={0}
          size="sm"
          variant="bordered"
          {...control.register("discountPercentage")}
        />
      </div>
      <div className="flex justify-between my-4">
        <span className="font-bold">Final Amount:</span>
        <span className="font-bold">{useWatch({ control, name: "finalAmount" })}</span>
      </div>
    </div>
  );
}
