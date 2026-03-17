import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CloudServicesPage from './pages/CloudServicesPage'
import CloudSecurityPage from './pages/CloudSecurityPage'
import DevOpsPage from './pages/DevOpsPage'
import AppDevelopmentPage from './pages/AppDevelopmentPage'
import AIMLPage from './pages/AIMLPage'
import ProductsPage from './pages/ProductsPage'
import CloudSentinelPage from './pages/CloudSentinelPage'
import PricingPage from './pages/PricingPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import NewsPage from './pages/NewsPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="cloud-services" element={<CloudServicesPage />} />
        <Route path="cloud-security" element={<CloudSecurityPage />} />
        <Route path="devops" element={<DevOpsPage />} />
        <Route path="app-development" element={<AppDevelopmentPage />} />
        <Route path="ai-ml" element={<AIMLPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/cloudsentinel" element={<CloudSentinelPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="news" element={<NewsPage />} />
      </Route>
    </Routes>
  )
}
