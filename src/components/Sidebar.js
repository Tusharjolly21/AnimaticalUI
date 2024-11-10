import React, {useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaBell, FaList, FaTable, FaSlidersH, FaTags, FaToolbox, FaChartPie, FaChevronDown,FaArrowRight, FaTimes } from 'react-icons/fa'
import { LuWalletCards,LuCircleDot } from "react-icons/lu";
import { TbLayoutNavbar,TbBackground } from "react-icons/tb"
import { PiShootingStar } from "react-icons/pi";
import { PiSelectionBackground,PiCards } from "react-icons/pi";
import { CiText } from "react-icons/ci";
import { MdAnimation } from "react-icons/md";
import { SiGoogleforms } from "react-icons/si"
import { FaRegCommentDots,FaBorderNone } from "react-icons/fa6";
import { CiGrid42 } from "react-icons/ci";

const menuItems = [
  { icon: FaBell, text: 'Alerts and Notifications', link: '/components/alerts-and-notifications' },
  { icon: FaTags, text: 'Badges & Labels', link: '/components/badges-and-labels' },
  { icon: FaHome, text: 'Buttons', link: '/components/buttons' },
  {icon: PiCards,text:'Collapse Card',link:'/components/collapse-card'},
  { icon: TbBackground, text: 'Cool Animated Background', link: '/components/cool-backgrounds' },
  {icon: MdAnimation , text: 'Feature Page',link:'/components/feature-page'},
  { icon: FaChevronDown, text: 'Footers', link: '/components/footers' },
  { icon: SiGoogleforms, text: 'Forms', link: '/components/forms' },
  {icon:FaArrowRight,text:'Glowing Gradient Card',link:'/components/glowing-gradient-card'},
  {icon: CiGrid42, text:'Grid Items',link:'/components/grid-items'},
  {icon:PiSelectionBackground ,text:'Hero Background',link:'/components/hero-background'},
  { icon: FaList, text: 'Lists & Dropdowns', link: '/components/lists-and-dropdowns' },
  {icon: FaBorderNone,text:'Moving Border Gradient',link:'/components/moving-border-gradient'},
  { icon: TbLayoutNavbar, text: 'Navbar', link: '/components/navbar' },
  {icon: LuCircleDot,text:'Particle Animation',link:'/components/particle-animation'},
  { icon: FaChartPie, text: 'Progress Indicators', link: '/components/progress-indicator' },
  { icon: PiShootingStar, text: 'Shooting Stars', link: '/components/shooting-stars' },
  { icon: FaSlidersH, text: 'Sliders & Carousels', link: '/components/sliders-and-carousels' },
  { icon: FaTable, text: 'Tables', link: '/components/tables' },
  {icon: FaRegCommentDots,text:'Testimonial Page',link:'/components/testimonials'},
  {icon: CiText, text:'Text Generation Effect',link:'/components/text-generation-effect'},
  { icon: FaToolbox, text: 'Floating Dock', link: '/components/floating-dock' },
  { icon: LuWalletCards, text: '3D cards', link: '/components/threeD-cards' },
  {icon: PiSelectionBackground,text:'Wavy Background',link:'/components/wavy-background'},
  {icon:SiGoogleforms,text:'Wizard Form',link:'/components/wizard-form'},
]

export default function Component({ isOpen, onClose }) {
  // const [expandedItems, setExpandedItems] = useState({})
  const location = useLocation()
  const sidebarRef = useRef(null)

  useEffect(() => {
    if (sidebarRef.current) {
      sidebarRef.current.scrollTop = 0
    }
  }, [isOpen])

  // const toggleItem = (index) => {
  //   setExpandedItems(prev => ({ ...prev, [index]: !prev[index] }))
  // }

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      <div 
        ref={sidebarRef}
        className={`fixed left-0 top-0 bottom-0 w-64 bg-[#0e0e0e] text-white shadow-lg z-30 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 flex flex-col`}
      >
        <div className="p-5">
          <div className="flex justify-between items-center mb-8">
            <div className="text-2xl font-bold mt-10 text-white"></div>
            <button
              onClick={onClose}
              className="text-gray-300 hover:text-white transition-colors duration-200 lg:hidden"
              aria-label="Close sidebar"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">All Components</h2>
          </div>
        </div>
        
        <nav className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 px-5 pb-5">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index} className="group">
                <Link
                  to={item.link}
                  className={`flex items-center justify-between p-2 rounded-md cursor-pointer transition-colors duration-200 ${
                    location.pathname === item.link ? 'bg-[#1c1c1c]' : 'hover:bg-[#1c1c1c]'
                  }`}
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      onClose()
                    }
                  }}
                >
                  <div className="flex items-center">
                    <item.icon className="mr-3 text-gray-400 group-hover:text-white transition-colors duration-200" />
                    <p className="text-sm">{item.text}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}