import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { ThemeProvider } from 'styled-components';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import queryClient from '@/apis/queryClient.js';
import theme from '@/theme/theme';
import { ErrorBoundaryProvider } from '@/container/ErrorBoundaryProvider.jsx';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')).render(
	<QueryClientProvider client={queryClient}>
		<ThemeProvider theme={theme}>
			<ReactQueryDevtools initialIsOpen={false} />
			<ErrorBoundaryProvider>
				<App />
				<Toaster />
			</ErrorBoundaryProvider>
		</ThemeProvider>
	</QueryClientProvider>,
);
