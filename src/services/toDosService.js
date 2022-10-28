import httpService from './httpService'

const toDosEndpoint = 'todos/'

const toDosService = {
	fetch: async () => {
		const { data } = await httpService.get(toDosEndpoint, {
			params: {
				_page: 1,
				_limit: 10,
			},
		})
		return data
	},
	create: async payload => {
		const { data } = await httpService.post(toDosEndpoint, payload)
		return data
	},
}

export default toDosService
