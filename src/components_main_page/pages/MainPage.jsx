import React from 'react';
import SearchBar from '../molecules/SearchBar';
import CategoryList from '../molecules/CategoryList';
import TeacherCard from '../organisms/TeacherCard';
import HowItWorks from '../organisms/HowItWorks';
import ReviewSection from '../organisms/ReviewSection';
import NawBarLogin from '../../components_user/molecules_user/NawBarLogin_user';
import DownHeader from '../../components/molecules/footer/DownHeader';
import Heading from '../atoms/Heading';
import SubHeading from '../atoms/SubHeading';
import CategoriesSection from '../organisms/CategoriesSection';
import './MainPage.scss';

const LoginPage = () => {
  const categories = ['Английский язык', 'Физкультура', 'История', 'Математика'];
  const reviews = [
    { text: 'Отличный преподаватель!', rating: 5, author: 'Елена' },
    { text: 'Очень помог с подготовкой к экзаменам.', rating: 4, author: 'Алексей' },
  ];
  return (
    <div >
      <NawBarLogin />
      <div className="main-page">
        <h1 className="header-title">Идеальным быть легко</h1>
        <SearchBar />
        <CategoryList categories={categories} />
        <div className="teacher-cards">
          <TeacherCard />
        </div>
        <Heading />
        <SubHeading />
        <CategoriesSection />
        <HowItWorks className="how-it-works" />
        <ReviewSection reviews={reviews} />
      </div>

      <DownHeader />
    </div>
  );
};

export default LoginPage;
