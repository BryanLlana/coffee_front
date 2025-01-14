import { useCoffeeContext } from "../../../../../context/hooks/useCoffeeContext";
import Button from "../../../../components/Button";
import { theme } from "../../../../config/theme";
import Category from "../Category";

const Sidebar = () => {
  const { categories } = useCoffeeContext();

  return (
    <div className="md:w-72">
      <div className="p-4">
        <img src="img/logo.svg" className="w-40" />
      </div>
      <div className="mt-5">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>

      <div style={{ padding: "10px 10px" }}>
        <Button
          style={{ marginTop: 15, width: "100%" }}
          backgroundColor={theme.color.ALERT[700]}
          borderColor={theme.color.ALERT[700]}
        >
          Cancelar orden
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
