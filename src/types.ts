/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  viscosity: string;
  apiGrade: string;
  sizes: string[];
  benefits: string[];
  description: string;
  priceEstimate?: string; // High-end premium feel
  isBestSeller?: boolean;
  imageAlt?: string;
  colorTheme: 'red' | 'gold' | 'silver';
}

export type ProductCategory =
  | 'Bike Engine Oil'
  | 'Car Engine Oil'
  | 'Diesel Engine Oil'
  | 'Gear Oil'
  | 'Hydraulic Oil'
  | 'Brake Fluid'
  | 'Coolant'
  | 'Grease'
  | 'Transmission Oil'
  | 'Industrial Oil';

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefits: string[];
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  feedback: string;
  avatarUrl: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface RecommendationRequest {
  vehicleType: 'bike' | 'car' | 'truck' | 'industrial';
  brand: string;
  model: string;
  engineType: string;
  usageType: string;
}

export interface RecommendationResult {
  product: Product;
  matchPercentage: number;
  explanation: string;
}
