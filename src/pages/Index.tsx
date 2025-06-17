import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, MapPin, Heart, Flower, Users, Camera, Gift } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-cream-50 to-sage-100 relative overflow-hidden">
      {/* Animated Pampas Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left side pampas */}
        <div className="absolute -left-20 top-20 w-40 h-60 opacity-20">
          <div className="w-full h-full bg-gradient-to-t from-sage-300 to-sage-200 rounded-full transform rotate-12 animate-[sway_6s_ease-in-out_infinite]"></div>
        </div>
        <div className="absolute -left-10 top-60 w-32 h-48 opacity-15">
          <div className="w-full h-full bg-gradient-to-t from-sage-400 to-sage-300 rounded-full transform -rotate-6 animate-[sway_8s_ease-in-out_infinite_reverse]"></div>
        </div>
        <div className="absolute -left-32 bottom-40 w-36 h-56 opacity-10">
          <div className="w-full h-full bg-gradient-to-t from-cream-400 to-cream-300 rounded-full transform rotate-20 animate-[sway_7s_ease-in-out_infinite]"></div>
        </div>
        
        {/* Right side pampas */}
        <div className="absolute -right-16 top-32 w-44 h-64 opacity-20">
          <div className="w-full h-full bg-gradient-to-t from-sage-300 to-sage-200 rounded-full transform -rotate-15 animate-[sway_9s_ease-in-out_infinite]"></div>
        </div>
        <div className="absolute -right-8 top-80 w-28 h-44 opacity-15">
          <div className="w-full h-full bg-gradient-to-t from-cream-400 to-cream-300 rounded-full transform rotate-8 animate-[sway_5s_ease-in-out_infinite_reverse]"></div>
        </div>
        <div className="absolute -right-28 bottom-60 w-40 h-58 opacity-12">
          <div className="w-full h-full bg-gradient-to-t from-sage-400 to-sage-300 rounded-full transform -rotate-25 animate-[sway_6.5s_ease-in-out_infinite]"></div>
        </div>
        
        {/* Center floating pampas */}
        <div className="absolute right-1/4 top-1/4 w-24 h-36 opacity-8">
          <div className="w-full h-full bg-gradient-to-t from-cream-300 to-cream-200 rounded-full transform rotate-45 animate-[float_10s_ease-in-out_infinite]"></div>
        </div>
        <div className="absolute left-1/3 bottom-1/3 w-20 h-32 opacity-6">
          <div className="w-full h-full bg-gradient-to-t from-sage-300 to-sage-200 rounded-full transform -rotate-30 animate-[float_12s_ease-in-out_infinite_reverse]"></div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-sage-200 to-cream-200 py-16 px-4 z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Heart className="w-12 h-12 text-sage-600 animate-pulse" />
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-sage-800 mb-4">
            Marie & Pierre
          </h1>
          <p className="font-sans text-xl md:text-2xl text-sage-700 mb-8">
            Vous invitent à célébrer leur mariage champêtre
          </p>
          <div className="flex justify-center items-center space-x-4 text-sage-600">
            <Calendar className="w-6 h-6" />
            <span className="font-sans text-lg">Samedi 15 Juin 2024</span>
            <Flower className="w-6 h-6" />
            <span className="font-sans text-lg">Domaine de la Prairie</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Programme de la journée */}
        <div className="mb-16 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-sage-800 mb-4">
              Programme de la journée
            </h2>
            <div className="flex justify-center">
              <Separator className="w-24 bg-sage-300" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Cérémonie */}
            <Card className="bg-white/80 backdrop-blur border-sage-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-sage-100 p-3 rounded-full mr-4">
                    <Heart className="w-6 h-6 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-semibold text-sage-800">Cérémonie</h3>
                    <p className="text-sage-600 font-sans">Échange des vœux</p>
                  </div>
                </div>
                <div className="space-y-3 text-sage-700">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-sage-500" />
                    <span className="font-sans">15h00 - 16h00</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-sage-500 mt-0.5" />
                    <div className="font-sans">
                      <p>Chapelle du Domaine</p>
                      <p className="text-sm text-sage-500">Jardin des roses</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cocktail */}
            <Card className="bg-white/80 backdrop-blur border-sage-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-cream-100 p-3 rounded-full mr-4">
                    <Users className="w-6 h-6 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-semibold text-sage-800">Cocktail</h3>
                    <p className="text-sage-600 font-sans">Vin d'honneur</p>
                  </div>
                </div>
                <div className="space-y-3 text-sage-700">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-sage-500" />
                    <span className="font-sans">16h30 - 19h00</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-sage-500 mt-0.5" />
                    <div className="font-sans">
                      <p>Terrasse du Domaine</p>
                      <p className="text-sm text-sage-500">Vue sur les champs</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dîner */}
            <Card className="bg-white/80 backdrop-blur border-sage-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-sage-100 p-3 rounded-full mr-4">
                    <Flower className="w-6 h-6 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-semibold text-sage-800">Dîner</h3>
                    <p className="text-sage-600 font-sans">Repas champêtre</p>
                  </div>
                </div>
                <div className="space-y-3 text-sage-700">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-sage-500" />
                    <span className="font-sans">19h30 - 23h00</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-sage-500 mt-0.5" />
                    <div className="font-sans">
                      <p>Grande Salle</p>
                      <p className="text-sm text-sage-500">Décoration florale champêtre</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Soirée */}
            <Card className="bg-white/80 backdrop-blur border-sage-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-cream-100 p-3 rounded-full mr-4">
                    <Heart className="w-6 h-6 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-semibold text-sage-800">Soirée dansante</h3>
                    <p className="text-sage-600 font-sans">Fête jusqu'au bout de la nuit</p>
                  </div>
                </div>
                <div className="space-y-3 text-sage-700">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-sage-500" />
                    <span className="font-sans">23h00 - 4h00</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-sage-500 mt-0.5" />
                    <div className="font-sans">
                      <p>Piste de danse extérieure</p>
                      <p className="text-sm text-sage-500">Sous les guirlandes lumineuses</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Informations pratiques */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Lieu et accès */}
          <Card className="bg-white/80 backdrop-blur border-sage-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="font-playfair text-3xl font-bold text-sage-800 mb-6 flex items-center">
                <MapPin className="w-8 h-8 mr-3 text-sage-600" />
                Lieu & Accès
              </h3>
              <div className="space-y-4 text-sage-700 font-sans">
                <div>
                  <h4 className="font-semibold text-lg text-sage-800 mb-2">Domaine de la Prairie</h4>
                  <p>123 Chemin des Champs</p>
                  <p>77000 Melun, France</p>
                </div>
                <Separator className="bg-sage-200" />
                <div>
                  <h4 className="font-semibold text-sage-800 mb-2">Transport</h4>
                  <p className="text-sm">• Parking gratuit sur place</p>
                  <p className="text-sm">• Navettes disponibles depuis la gare de Melun</p>
                  <p className="text-sm">• Covoiturage organisé (nous contacter)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dress code */}
          <Card className="bg-white/80 backdrop-blur border-sage-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="font-playfair text-3xl font-bold text-sage-800 mb-6 flex items-center">
                <Flower className="w-8 h-8 mr-3 text-sage-600" />
                Dress Code
              </h3>
              <div className="space-y-4 text-sage-700 font-sans">
                <div>
                  <h4 className="font-semibold text-lg text-sage-800 mb-2">Tenue champêtre chic</h4>
                  <p>Privilégiez les couleurs naturelles et douces</p>
                </div>
                <Separator className="bg-sage-200" />
                <div>
                  <h4 className="font-semibold text-sage-800 mb-2">Conseils</h4>
                  <p className="text-sm">• Évitez les talons hauts (terrain en herbe)</p>
                  <p className="text-sm">• Prévoyez une veste pour la soirée</p>
                  <p className="text-sm">• Les couleurs pastel sont les bienvenues</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hébergement */}
        <Card className="bg-white/80 backdrop-blur border-sage-200 shadow-lg mb-16">
          <CardContent className="p-8">
            <h3 className="font-playfair text-3xl font-bold text-sage-800 mb-6 text-center">
              Hébergements recommandés
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-sage-800 mb-2">Hôtel des Champs</h4>
                <p className="text-sm text-sage-600 mb-2">À 5 min du domaine</p>
                <p className="text-xs text-sage-500">Réservation : 01 23 45 67 89</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-sage-800 mb-2">Gîte de la Ferme</h4>
                <p className="text-sm text-sage-600 mb-2">Hébergement champêtre</p>
                <p className="text-xs text-sage-500">Réservation : gite-ferme.fr</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-sage-800 mb-2">Camping La Prairie</h4>
                <p className="text-sm text-sage-600 mb-2">Pour les plus aventureux</p>
                <p className="text-xs text-sage-500">Réservation : camping-prairie.com</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Informations spéciales */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/80 backdrop-blur border-sage-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-bold text-sage-800 mb-4 flex items-center">
                <Camera className="w-6 h-6 mr-3 text-sage-600" />
                Photos & Souvenirs
              </h3>
              <p className="text-sage-700 font-sans text-sm mb-4">
                Un photographe professionnel sera présent. N'hésitez pas à prendre vos propres photos et à les partager !
              </p>
              <p className="text-sage-600 font-sans text-xs">
                Hashtag : #MariePierreChampetre2024
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur border-sage-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-bold text-sage-800 mb-4 flex items-center">
                <Gift className="w-6 h-6 mr-3 text-sage-600" />
                Liste de mariage
              </h3>
              <p className="text-sage-700 font-sans text-sm mb-4">
                Votre présence est le plus beau des cadeaux. Si vous souhaitez nous gâter, une liste est disponible.
              </p>
              <p className="text-sage-600 font-sans text-xs">
                Disponible sur : mariage-liste.fr
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact */}
        <div className="text-center mt-16 p-8 bg-sage-100/50 rounded-2xl">
          <h3 className="font-playfair text-2xl font-bold text-sage-800 mb-4">
            Une question ?
          </h3>
          <p className="text-sage-700 font-sans mb-4">
            N'hésitez pas à nous contacter pour toute information complémentaire
          </p>
          <div className="flex justify-center space-x-8 text-sage-600">
            <div>
              <p className="font-semibold">Marie</p>
              <p className="text-sm">06 12 34 56 78</p>
            </div>
            <div>
              <p className="font-semibold">Pierre</p>
              <p className="text-sm">06 87 65 43 21</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
