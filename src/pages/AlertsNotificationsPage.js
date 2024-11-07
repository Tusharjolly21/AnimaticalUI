import React, { useState } from 'react';
import { X, AlertCircle, CheckCircle, Info, AlertTriangle, Bell } from 'lucide-react';
import CodeBlock from "../components/CodeBlock"

const alertCode = `<Alert
  type="success"
  message="Your changes have been saved successfully."
  onClose={() => setShowAlert(false)}
/>`;

const toastCode = `<Toast
  type="success"
  message="File uploaded successfully"
  onClose={() => setShowToast(false)}
/>`;

const inlineNotificationCode = `<InlineNotification
  message="Please update your browser for the best experience."
  onClose={() => setShowInline(false)}
/>`;

const notificationBadgeCode = `<NotificationBadge count={notificationCount} />`;

const Alert = ({ type, message, onClose }) => {
  const types = {
    success: { icon: CheckCircle, bgColor: 'bg-green-100', textColor: 'text-green-800', iconColor: 'text-green-400' },
    error: { icon: AlertCircle, bgColor: 'bg-red-100', textColor: 'text-red-800', iconColor: 'text-red-400' },
    warning: { icon: AlertTriangle, bgColor: 'bg-yellow-100', textColor: 'text-yellow-800', iconColor: 'text-yellow-400' },
    info: { icon: Info, bgColor: 'bg-blue-100', textColor: 'text-blue-800', iconColor: 'text-blue-400' },
  };

  const { icon: Icon, bgColor, textColor, iconColor } = types[type];

  return (
    <div className={`${bgColor} ${textColor} px-4 py-3 rounded relative`} role="alert">
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon className={`h-5 w-5 ${iconColor}`} aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium">{message}</p>
        </div>
        {onClose && (
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                className={`inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${textColor} focus:ring-offset-${bgColor.split('-')[1]}-50`}
                onClick={onClose}
              >
                <span className="sr-only">Dismiss</span>
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Toast = ({ type, message, onClose }) => {
  const types = {
    success: { icon: CheckCircle, bgColor: 'bg-green-500', textColor: 'text-white' },
    error: { icon: AlertCircle, bgColor: 'bg-red-500', textColor: 'text-white' },
    warning: { icon: AlertTriangle, bgColor: 'bg-yellow-500', textColor: 'text-white' },
    info: { icon: Info, bgColor: 'bg-blue-500', textColor: 'text-white' },
  };

  const { icon: Icon, bgColor, textColor } = types[type];

  return (
    <div className={`${bgColor} ${textColor} px-4 py-3 rounded-lg shadow-lg max-w-sm w-full`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Icon className="h-6 w-6 mr-3" aria-hidden="true" />
          <p className="font-medium">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="ml-4 inline-flex text-white hover:text-gray-100 focus:outline-none"
        >
          <span className="sr-only">Close</span>
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

const InlineNotification = ({ message, onClose }) => {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <Info className="h-5 w-5 text-blue-400" aria-hidden="true" />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className="text-sm text-blue-700">{message}</p>
          {onClose && (
            <button
              className="mt-3 text-sm text-blue-700 hover:text-blue-600 md:mt-0 md:ml-6"
              onClick={onClose}
            >
              Dismiss
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const NotificationBadge = ({ count }) => {
  return (
    <button className="relative p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <Bell className="h-6 w-6 text-gray-600" aria-hidden="true" />
      {count > 0 && (
        <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-500 text-xs text-white font-bold flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
          {count}
        </span>
      )}
    </button>
  );
};

export default function AlertsAndNotifications() {
  const [showAlert, setShowAlert] = useState(true);
  const [showToast, setShowToast] = useState(true);
  const [showInline, setShowInline] = useState(true);
  const [notificationCount, setNotificationCount] = useState(3);

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Alerts and Notifications</h1>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Alerts</h2>
        {showAlert && (
          <Alert
            type="success"
            message="Your changes have been saved successfully."
            onClose={() => setShowAlert(false)}
          />
        )}
        <Alert type="error" message="An error occurred while processing your request." />
        <Alert type="warning" message="Your account is about to expire. Please renew." />
        <Alert type="info" message="A new version of the software is available." />
        <CodeBlock code={alertCode}/>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Toast Notifications</h2>
        {showToast && (
          <Toast
            type="success"
            message="File uploaded successfully"
            onClose={() => setShowToast(false)}
          />
        )}
        <CodeBlock code={toastCode}/>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Inline Notification</h2>
        {showInline && (
          <InlineNotification
            message="Please update your browser for the best experience."
            onClose={() => setShowInline(false)}
          />
        )}
        <CodeBlock code={inlineNotificationCode}/>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Notification Badge</h2>
        <div className="flex items-center space-x-4">
          <NotificationBadge count={notificationCount} />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={() => setNotificationCount(prev => Math.max(0, prev - 1))}
          >
            Clear Notification
          </button>
        </div>
        <CodeBlock code = {notificationBadgeCode}/>
      </div>
    </div>
  );
}
