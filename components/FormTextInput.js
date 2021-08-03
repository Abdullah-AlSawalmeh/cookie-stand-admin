const FormTextInput = ({ label, id_name }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded  bg-green-100 p-2 bg-opacity-50 font-semibold">
      <label className="p-1" for="min_cus_hour">
        {label}
      </label>
      <input className="w-full" type="number" id={id_name} name={id_name} />
    </div>
  );
};

export default FormTextInput;
