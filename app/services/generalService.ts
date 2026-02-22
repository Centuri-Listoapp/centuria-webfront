import { gql } from "graphql-request";
import { graphQLClient } from "./graphql-client";
import { CandidateData } from "../models/candidate";
import { CandidateVotingCenterData } from "../models/votingCenter";
import { CreateProspectDto, LoginDto } from "../models/createProspect.dto";
import { LoginData } from "../models/login";
import { StatesByCountryData } from "../models/states_by_country_data";
import { CandidateWardsData } from "../models/candidate_wards_data";
import { CandidatesData } from "../models/candidates_data";
import authService from "./authService";

class GeneralService {
  async getCandidate(id: string) {
    const query = gql`
      query Candidate($id: ObjectID!) {
        candidate(id: $id) {
          activitiesCount
          networkMembersCount
          promotionalImageUrl
          promotionalMessage
          fullName
          contact {
            phone
            web
            whatsapp
          }
          id
          locationLinks {
            url
            address {
              city
              country
              state
            }
          }
          address {
            state
            country
            city
          }
        }
      }
    `;
    try {
      const data = await graphQLClient.request<CandidateData>(query, { id });
      console.log("getCandidate.res:", data);
      return data;
    } catch (error) {
      console.log("getCandidate.err:", error);
      throw error;
    }
  }

  async getCandidateVotingCenters(candidateId: string) {
    const query = gql`
      query CandidateVotingCenters($candidateId: ObjectID!) {
        candidateVotingCenters(candidateId: $candidateId) {
          contactUrl
          id
          name
          networkGoalCount
          address {
            city
            state
          }
        }
      }
    `;
    try {
      const data = await graphQLClient.request<CandidateVotingCenterData>(
        query,
        { candidateId },
      );
      console.log("getCandidateVotingCenters.res:", data);
      return data;
    } catch (error) {
      console.log("getCandidateVotingCenters.err:", error);
      throw error;
    }
  }

  async createProspect(input: CreateProspectDto) {
    const query = gql`
      mutation CreateProspect($input: CreateProspectInput!) {
        createProspect(input: $input) {
          success
          message
        }
      }
    `;
    try {
      const data = await graphQLClient.request<any>(query, { input });
      console.log("createProspect.res:", data);
      return data;
    } catch (error) {
      console.log("createProspect.err:", error);
      throw error;
    }
  }

  async login(input: LoginDto) {
    const query = gql`
      mutation Login($input: LoginInput!) {
        login(input: $input) {
          refreshToken
          token
          user {
            createdAt
            dni
            email
            phone
            id
            fullName
            referralCode
            updatedAt
            referredBy {
              fullName
              id
            }
            address {
              city
              state
              country
            }
            role
            gender
            dateOfBirth
          }
        }
      }
    `;
    try {
      const data = await graphQLClient.request<LoginData>(query, { input });
      authService.setToken(data.login.token);
      authService.loginData = data.login;
      console.log("login.res:", data, authService.loginData);
      return data;
    } catch (error) {
      console.log("login.err:", error);
      throw error;
    }
  }

  async getStatesByCountry(countryCode: string) {
    const query = gql`
      query StatesByCountry($countryCode: String!) {
        statesByCountry(countryCode: $countryCode) {
          cities {
            code
            name
          }
          code
          name
        }
      }
    `;
    try {
      const data = await graphQLClient.request<StatesByCountryData>(query, {
        countryCode,
      });
      console.log("getStatesByCountry.res:", data);
      return data;
    } catch (error) {
      console.log("getStatesByCountry.err:", error);
      throw error;
    }
  }

  async getCandidateWards(
    candidateId: string,
    state?: string,
    municipality?: string,
  ) {
    const query = gql`
      query CandidateWards(
        $candidateId: ObjectID!
        $municipality: String = ""
        $state: String = ""
      ) {
        candidateWards(
          candidateId: $candidateId
          municipality: $municipality
          state: $state
        ) {
          whatsappLink
          title
          state
          municipality
          id
        }
      }
    `;
    try {
      const data = await graphQLClient.request<CandidateWardsData>(query, {
        candidateId,
        state,
        municipality,
      });
      console.log("getCandidateWards.res:", data);
      return data;
    } catch (error) {
      console.log("getCandidateWards.err:", error);
      throw error;
    }
  }

  async getCandidates() {
    const query = gql`
      query Candidates($input: CandidateTypeFilterInputType = {}) {
        candidates(input: $input) {
          data {
            activitiesCount
            contact {
              phone
              whatsapp
              web
            }
            fullName
            id
            networkMembersCount
            promotionalImageUrl
            promotionalMessage
            isActive
            email
            enabledFeatures
            phone
            address {
              city
              country
              state
            }
            wards {
              id
              municipality
              state
              title
              whatsappLink
            }
          }
          pages
          total
        }
      }
    `;
    try {
      const data = await graphQLClient.request<CandidatesData>(query, {
        input: {
          limit: 550,
          skip: 0,
        },
      });
      console.log("getCandidateWards.res:", data);
      return data;
    } catch (error) {
      console.log("getCandidateWards.err:", error);
      throw error;
    }
  }
}

export default new GeneralService();
