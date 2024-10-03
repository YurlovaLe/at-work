import React from 'react';
import { useFormik } from 'formik';

import { UserInfoSchema } from './UserInfoForm.validation';

import { User } from '../../App.types';

import {
  FieldInput,
  FieldLabel,
  FieldError,
  FormAction,
  SubmitButton,
  UserInfo,
  UserInfoBlock,
  UserInfoBlockField,
  UserInfoTitle,
} from './UserInfoForm.styles';

export function UserInfoForm({ user, onSubmit }: {user: User, onSubmit: () => void}) {
  const {
    handleSubmit,
    handleChange,
    errors,
    touched,
    values,
    setFieldTouched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: user.name,
      username: user.username,
      email: user.email,
      city: user.address.city,
      phone: user.phone,
      company: user.company.name,
    },
    validationSchema: UserInfoSchema,
    onSubmit,
  });

  return (
    <UserInfo>
      <UserInfoTitle>Данные профиля</UserInfoTitle>
      <UserInfoBlock onSubmit={handleSubmit}>
        <UserInfoBlockField>
          <FieldLabel>Имя</FieldLabel>
          <FieldInput
            type="text"
            name="name"
            disabled={isSubmitting}
            value={values.name}
            $isErrored={touched.name && !!errors.name}
            onChange={handleChange}
            onBlur={() => setFieldTouched('name')}
          />
          {errors.name && <FieldError>{errors.name}</FieldError>}
        </UserInfoBlockField>
        <UserInfoBlockField>
          <FieldLabel>Никнейм</FieldLabel>
          <FieldInput
            type="text"
            name="username"
            value={values.username}
            $isErrored={touched.username && !!errors.username}
            onChange={handleChange}
            onBlur={() => setFieldTouched('username')}
          />
          {errors.username && <FieldError>{errors.username}</FieldError>}
        </UserInfoBlockField>
        <UserInfoBlockField>
          <FieldLabel>Почта</FieldLabel>
          <FieldInput
            type="email"
            name="email"
            value={values.email}
            $isErrored={touched.email && !!errors.email}
            onChange={handleChange}
            onBlur={() => setFieldTouched('email')}
          />
          {errors.email && <FieldError>{errors.email}</FieldError>}
        </UserInfoBlockField>
        <UserInfoBlockField>
          <FieldLabel>Город</FieldLabel>
          <FieldInput
            type="text"
            name="city"
            value={values.city}
            $isErrored={touched.city && !!errors.city}
            onChange={handleChange}
            onBlur={() => setFieldTouched('city')}
          />
          {errors.city && <FieldError>{errors.city}</FieldError>}
        </UserInfoBlockField>
        <UserInfoBlockField>
          <FieldLabel>Телефон</FieldLabel>
          <FieldInput
            type="text"
            name="phone"
            value={values.phone}
            $isErrored={touched.phone && !!errors.phone}
            onChange={handleChange}
            onBlur={() => setFieldTouched('phone')}
          />
          {errors.phone && <FieldError>{errors.phone}</FieldError>}
        </UserInfoBlockField>
        <UserInfoBlockField>
          <FieldLabel>Название компании</FieldLabel>
          <FieldInput
            type="text"
            name="company"
            value={values.company}
            $isErrored={touched.company && !!errors.company}
            onChange={handleChange}
            onBlur={() => setFieldTouched('company')}
          />
          {errors.company && <FieldError>{errors.company}</FieldError>}
        </UserInfoBlockField>
        <FormAction>
          <SubmitButton type="submit">Сохранить</SubmitButton>
        </FormAction>
      </UserInfoBlock>
    </UserInfo>
  );
}
