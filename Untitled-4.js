import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, DollarSign, ShoppingBag, Download, Filter, Eye } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const SalesPanel = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("today");

  const salesData = {
    today: {
      revenue: 284.50,
      orders: 12,
      avgTicket: 23.71,
      growth: 12,
    },
    week: {
      revenue: 1456.80,
      orders: 67,
      avgTicket: 21.74,
      growth: 8,
    },
    month: {
      revenue: 5234.20,
      orders: 245,
      avgTicket: 21.36,
      growth: 15,
    },
  };

  const recentSales = [
    {
      id: "#001",
      customer: "Maria Silva",
      products: ["2kg Tomate Orgânico", "1un Alface Crespa"],
      total: 20.00,
      time: "14:32",
      status: "Concluída",
      paymentMethod: "Dinheiro",
    },
    {
      id: "#002",
      customer: "João Santos",
      products: ["3kg Banana Prata", "1kg Cenoura"],
      total: 22.50,
      time: "14:15",
      status: "Concluída",
      paymentMethod: "PIX",
    },
    {
      id: "#003",
      customer: "Ana Costa",
      products: ["1maço Manjericão", "2kg Tomate"],
      total: 19.50,
      time: "13:48",
      status: "Pendente",
      paymentMethod: "Cartão",
    },
    {
      id: "#004",
      customer: "Carlos Lima",
      products: ["1kg Cenoura", "2un Alface"],
      total: 10.50,
      time: "13:22",
      status: "Concluída",
      paymentMethod: "Dinheiro",
    },
  ];

  const topProducts = [
    {
      name: "Tomate Orgânico",
      quantity: "15kg",
      revenue: 127.50,
      growth: 23,
    },
    {
      name: "Banana Prata",
      quantity: "12kg",
      revenue: 72.00,
      growth: 8,
    },
    {
      name: "Alface Crespa",
      quantity: "8un",
      revenue: 24.00,
      growth: -5,
    },
    {
      name: "Cenoura",
      quantity: "6kg",
      revenue: 27.00,
      growth: 15,
    },
  ];

  const currentData = salesData[selectedPeriod as keyof typeof salesData];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Concluída":
        return <Badge className="bg-green-100 text-green-800">Concluída</Badge>;
      case "Pendente":
        return <Badge className="bg-yellow-100 text-yellow-800">Pendente</Badge>;
      case "Cancelada":
        return <Badge variant="destructive">Cancelada</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPaymentMethodBadge = (method: string) => {
    const colors = {
      "Dinheiro": "bg-blue-100 text-blue-800",
      "PIX": "bg-green-100 text-green-800",
      "Cartão": "bg-purple-100 text-purple-800",
    };
    
    return (
      <Badge className={colors[method as keyof typeof colors] || "bg-gray-100 text-gray-800"}>
        {method}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Painel de Vendas</h2>
          <p className="text-gray-600">Acompanhe suas vendas e relatórios</p>
        </div>
        <div className="flex items-center space-x-4">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Hoje</SelectItem>
              <SelectItem value="week">Esta Semana</SelectItem>
              <SelectItem value="month">Este Mês</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Faturamento</p>
                <p className="text-2xl font-bold text-gray-900">R$ {currentData.revenue.toFixed(2)}</p>
                <p className="text-sm text-green-600 font-medium">+{currentData.growth}%</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pedidos</p>
                <p className="text-2xl font-bold text-gray-900">{currentData.orders}</p>
                <p className="text-sm text-blue-600 font-medium">vendas</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <ShoppingBag className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Ticket Médio</p>
                <p className="text-2xl font-bold text-gray-900">R$ {currentData.avgTicket.toFixed(2)}</p>
                <p className="text-sm text-purple-600 font-medium">por venda</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Crescimento</p>
                <p className="text-2xl font-bold text-gray-900">+{currentData.growth}%</p>
                <p className="text-sm text-orange-600 font-medium">vs período anterior</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Sales */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5 text-green-600" />
              <span>Vendas Recentes</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentSales.map((sale) => (
                <div key={sale.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        {sale.customer.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{sale.customer}</p>
                        <p className="text-sm text-gray-600">{sale.id} • {sale.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">R$ {sale.total.toFixed(2)}</p>
                      {getStatusBadge(sale.status)}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1">
                      {sale.products.map((product, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {product}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      {getPaymentMethodBadge(sale.paymentMethod)}
                      <Button variant="ghost" size="sm">
                        <Eye className="h-3 w-3 mr-1" />
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-orange-600" />
              <span>Produtos Mais Vendidos</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-orange-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.quantity} vendidos</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-bold text-green-600">R$ {product.revenue.toFixed(2)}</p>
                    <p className={`text-sm font-medium ${
                      product.growth >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {product.growth >= 0 ? '+' : ''}{product.growth}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Summary Card */}
      <Card className="bg-gradient-to-r from-green-50 to-orange-50 border-none">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Resumo do Período</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-2xl font-bold text-green-600">{currentData.orders}</p>
                <p className="text-sm text-gray-600">Vendas Realizadas</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">R$ {currentData.revenue.toFixed(2)}</p>
                <p className="text-sm text-gray-600">Total Faturado</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600">R$ {currentData.avgTicket.toFixed(2)}</p>
                <p className="text-sm text-gray-600">Ticket Médio</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-600">+{currentData.growth}%</p>
                <p className="text-sm text-gray-600">Crescimento</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
