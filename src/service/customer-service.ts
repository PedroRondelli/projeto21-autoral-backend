import { cutomerRepository } from "../repositorys/customer-repository";

async function getAllProfiles() {
  try {
    return await cutomerRepository.getAllArtistProfile();
  } catch (error) {
    console.log(error);
  }
}

export const customerService = { getAllProfiles };
