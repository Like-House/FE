import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '../../../constants/key';
import {
  getNotificationSettings,
  updateNotificationSettings,
} from '../../../apis/notifications';

const useNotificationSettings = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.NOTIFICATION_SETTINGS],
    queryFn: getNotificationSettings,
  });

  const mutation = useMutation(updateNotificationSettings, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.NOTIFICATION_SETTINGS]);
    },
  });

  return { data, isLoading, error, updateSettings: mutation.mutate };
};

export default useNotificationSettings;
