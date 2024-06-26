"use client";

import { db } from "@/app/config/firebase";
import { categoryConverter } from "@/app/converters/firestore";
import Category from "@/app/types/category";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

import CategoryItem from "../category-item";
import { CategoriesContainer, CategoriesContent } from "./style";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const categoryFromFirestore: Category[] = [];

      const querySnapshot = await getDocs(
        collection(db, "categories").withConverter(categoryConverter),
      );

      querySnapshot.forEach((doc) => {
        categoryFromFirestore.push(doc.data() as Category);
      });

      setCategories(categoryFromFirestore);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  );
};

export default Categories;
