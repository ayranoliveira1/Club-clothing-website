import Category from "@/app/types/category";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${category.imageUrl})` }}
      className="flex h-full w-full items-center justify-center gap-4 rounded-lg bg-[#0000004d] bg-opacity-30 bg-cover bg-center bg-no-repeat shadow-md"
    >
      <div className="rounded-lg border border-gray-900 bg-[#e9ecef73] bg-opacity-45 px-4 py-2 text-center text-gray-100 shadow transition duration-500 ease-in-out hover:cursor-pointer hover:bg-[#e9ecef8c] hover:bg-opacity-55">
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </div>
    </div>
  );
};

export default CategoryItem;
