import * as Yup from "yup";

const cuartoValidationSchema = Yup.object({
  codigo: Yup.string().required("Required"),
  capacidad: Yup.number().required("Required").min(1, "Must be at least 1"),
  ocupacion: Yup.number()
    .required("Required")
    .min(0, "Cannot be negative")
    .test(
      "max-ocupacion",
      "Ocupación cannot exceed capacidad",
      function (value) {
        return value <= this.parent.capacidad;
      }
    ),
});

export default cuartoValidationSchema;
