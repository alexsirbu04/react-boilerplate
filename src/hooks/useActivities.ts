import { IActivity } from '../store/ui/activities';

export const useActivities = () => {
	const getActivity = (activities: IActivity[], activityType: string | null) => {
		return activities.filter(activity => activity.type === activityType).length > 0;
	};

	const getActivities = (activities: IActivity[], activityTypes: Array<string | null>) => {
		return activities.filter(activity => activityTypes.includes(activity.type)).length > 0;
	};

	return { getActivity, getActivities };
};
