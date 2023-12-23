import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useTask = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)
    const {data: task = [], refetch} = useQuery({
        queryKey: ['task', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/task?email=${user.email}`)
            return res.data;
        }
    })
    return [task, refetch]
};

export default useTask;